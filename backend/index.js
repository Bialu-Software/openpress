const express = require('express')
const app = express()
const config = require("../config.json").backend
const { filter_posts } = require("./filter.js")

// this is what the posts will look like in the posts.json
//{
//            "id": 123,
//            "imageUrl": "https://images.unsplash.com/photo-1682208703123-8b8abb609daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//            "headline": "5 Easy Ways to Boost Your Productivity Today!",
//            "text": "In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most of your day!",
//            "html": "<h1>Test</h1>",
//            "author": "Michal Kopčík",
//            "tags": ["#tutorial", "#news", "#IT"],
//            "timestamp": 1684773447
//}

// after sucessfull login sends auth token
app.get('/login', (req, res) => {
  res.send('backend test')
})

// if no filter then sends all posts from json and if filter sends filtered posts (without text)
app.get('/getPosts', (req, res) => {
  // use the filter_posts function
  res.send('backend test')
})

// sends post based on id or name (with all of the text)
app.get('/getPost', (req, res) => {
  // use the filter_posts function
  res.send('backend test')
})

// gets info about the post then adds it to the json and sends response based on if the post was saved or not
app.get('/addPost', (req, res) => {
  res.send('backend test')
})

// deletes post from the json and sends response based on if it was deleted or not
app.get('/delPost', (req, res) => {
  res.send('backend test')
})

// edit post from the json and sends response based on if it was deleted or not
app.get('/editPost', (req, res) => {
  res.send('backend test')
})

// sends all emails form the json
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
