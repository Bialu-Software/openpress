const express = require('express')
const app = express()
const config = require("../config.json").backend

app.get('/login', (req, res) => {
  res.send('backend test')
})

app.get('/getPosts', (req, res) => {
  res.send('backend test')
})

app.get('/getPost', (req, res) => {
  res.send('backend test')
})

app.get('/addPost', (req, res) => {
  res.send('backend test')
})

app.get('/delPost', (req, res) => {
  res.send('backend test')
})

app.get('/editPost', (req, res) => {
  res.send('backend test')
})

app.get('/subscriberEmailsGet', (req, res) => {
  res.send('backend test')
})

app.get('/subscriberEmailsDel', (req, res) => {
  res.send('backend test')
})

app.get('/subscriberEmailsAdd', (req, res) => {
  res.send('backend test')
})

app.get('/sendEmails', (req, res) => {
  res.send('backend test')
})

app.listen(config.port, () => {
  console.log(`Backend running on port ${config.port}`)
})