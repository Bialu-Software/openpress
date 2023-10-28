const express = require('express');
const cors = require('cors');
const fs = require('fs');
const crypto = require('crypto');
const dotenv = require('dotenv')

// Load environment variables from .env file
dotenv.config();

// Check if the secret key is set in the environment variables
if (!process.env.SECRET_KEY) {
  const secret_key = crypto.randomBytes(64).toString('hex');

  // Update the secret key in the environment variables and in the .env file
  process.env.SECRET_KEY = secret_key;
  fs.writeFileSync('.env', `SECRET_KEY=${secret_key}\n`, { flag: 'a' }); // Append to .env

  console.warn(`\x1b[33;1mWARNING\x1b[0m: server secret key was not set, a random secret key has been generated and saved to the .env file`);
}

const config = {
  frontend_production_port: process.env.PRODUCTION_PORT || 80,
  frontend_development_port: process.env.DEVELOPMENT_PORT || 8080,
  port: process.env.BACKEND_PORT || 3000,
  secret_key: process.env.SECRET_KEY,
};

const app = express();
const routes = require('./routes');

app.use(cors({
  origin: [`http://0.0.0.0:${config.frontend_production_port}`, `http://0.0.0.0:${config.frontend_development_port}`, `http://localhost:${config.frontend_production_port}`, `http://localhost:${config.frontend_development_port}`],
  credentials: true
}));
app.use(express.json());
app.use('/api', routes);

app.listen(config.port, () => {
  console.log(`Backend running on http://localhost:${config.port}/api/`);
});
