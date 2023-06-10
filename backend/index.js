const express = require('express')
const app = express()
const config = require("../config.json").backend

app.get('/', (req, res) => {
  res.send('backend test')
})

app.listen(config.port, () => {
  console.log(`Backend running on port ${config.port}`)
})