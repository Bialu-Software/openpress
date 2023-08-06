const express = require('express')
const cors = require('cors');
const config = require("../config.json").backend

const app = express()
const routes = require("./routes")

app.use(cors())
app.use(express.json())
app.use("/api", routes)

app.listen(config.port, () => {
  console.log(`Backend running on http://localhost:${config.port}/api/`)
})