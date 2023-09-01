const express = require('express');
const cors = require('cors');
const fs = require('fs');
const crypto = require('crypto');
const config = require("../config.json").backend;

if (config.secret_key == "change_this_to_whatever") {
  const newSecretKey = crypto.randomBytes(32).toString('hex');
  config.secret_key = newSecretKey;
  fs.writeFileSync('./config.json', JSON.stringify({ backend: config }, null, 2));
}

const app = express()
const routes = require("./routes")

app.use(cors())
app.use(express.json())
app.use("/api", routes)

app.listen(config.port, () => {
  console.log(`Backend running on http://localhost:${config.port}/api/`)
})