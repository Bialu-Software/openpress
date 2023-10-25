const express = require('express');
const cors = require('cors');
const fs = require('fs');
const crypto = require('crypto');

// Check if the secret key is set
if (process.env.SECRET_KEY === undefined || process.env.SECRET_KEY === '') {
  const secret_key = crypto.randomBytes(64).toString('hex');

  // Check if the .env file exists, if it does, add the key into it,
  // else create it and add the secret key
  if (fs.existsSync('.env')) {
    let file = fs.readFileSync('.env', 'utf8');

    // Check if the secret key is already set in the .env file, if it is, replace the line,
    // else add it
    if (file.includes('SECRET_KEY')) {
      file = file.replace(/SECRET_KEY=.*/g, `SECRET_KEY=${secret_key}\n`);
    } else {
      file += `\nSECRET_KEY=${secret_key}\n`;
    }

    fs.writeFileSync('.env', file);
  } else {
    fs.writeFileSync('.env', `SECRET_KEY=${secret_key}\n`);
  }

  // Update the secret key in the environment variables
  process.env.SECRET_KEY = secret_key;

  console.warn(`\x1b[33;1mWARNING\x1b[0m: server secret key was not set, a random secret key has been generated and saved to the .env file`);
}

const config = {
  port: process.env.SERVER_PORT || 3000,
  secret_key: process.env.SECRET_KEY,
};

const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(config.port, () => {
  console.log(`Backend running on http://localhost:${config.port}/api/`);
});