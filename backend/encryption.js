const crypto = require('crypto');
const bcrypt = require('bcrypt');

const saltRounds = 10;

function encrypt_email() {}

function decrypt_email() {}

function generate_token(payload, secretKey) {
  /*
  Will generate a HMAC SHA512 JWT token from the payload and provided key
  */
  payload.timestamp = Date.now();
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64');
  const hmac = crypto.createHmac('sha512', secretKey);
  hmac.update(encodedPayload);
  const signature = hmac.digest('base64');
  const jwt = `${encodedPayload}.${signature}`;
  return jwt;
}

function verify_token(jwt, secretKey) {
  /*
  Will verify the signature of a HMAC SHA512 JWT token with the provided key
  If the return value isValid is false, it means this token has been manipulated with and should not be trusted at all.
  The return value payload contains the data encoded when generating it.
  */
  try {
    const [encodedPayload, signature] = jwt.split('.');
    const hmac = crypto.createHmac('sha512', secretKey);
    hmac.update(encodedPayload);
    const calculatedSignature = hmac.digest('base64');
    const isSignatureValid = signature === calculatedSignature;
    const payload = JSON.parse(Buffer.from(encodedPayload, 'base64').toString('utf8'));
    return {
      isValid: isSignatureValid,
      payload: payload,
    };
  } catch {
    return {
      isValid: false,
      payload: {},
    };
  }
}

async function salted_hash_password(plainPassword) {
  /*
  ! This is an async function
  Hashes plainPassword along with a salt.
  Will throw an error if one occoures.
  */
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
}

async function salted_check_password(plainPassword, hashedPassword) {
  /*
  ! This is an async function
  Checks plainPassword against the specified password hash. Returns true/false depending on whether they match or not.
  Will throw an error if one occoures.
  */
  try {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    return match;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  encrypt_email,
  decrypt_email,
  generate_token,
  verify_token,
  salted_hash_password,
  salted_check_password,
};
