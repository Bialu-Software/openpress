const sha256 = require('sha256');

function encrypt_emails() {

}

function generate_token(username, password) {

    const timestamp = Date.now()
    const token = sha256(username + password + timestamp.toString());

    return { token: token, timestamp: timestamp }
}

module.exports = {
    encrypt_emails,
    generate_token
}