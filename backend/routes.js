const express = require("express")
const { filter_posts } = require("./filter.js")
const { generate_token } = require("./encryption.js")

let posts = require("./data/posts.json")
let profiles = require("./data/profiles.json")
let emails = require("./data/emails.json")

const router = express.Router()

// basic entry page
router.get('/', (req, res) => {
    res.send('blog backend :)')
})

// after sucessfull login sends auth token
router.post('/login', (req, res) => {
    console.log(req.body);
    data = generate_token("gumernus", "lol")
    res.send(data.token)
})

// if no filter then sends all posts from json and if filter sends filtered posts (without text)
router.get('/getPosts', (req, res) => {
    // use the filter_posts function
    // filter_posts()
    res.send(data)
})

// sends post based on id or name (with all of the text)
router.get('/getPost', (req, res) => {
    // use the filter_posts function
    res.send('backend test')
})

// gets info about the post then adds it to the json and sends response based on if the post was saved or not
router.get('/addPost', (req, res) => {
    res.send('backend test')
})

// deletes post from the json and sends response based on if it was deleted or not
router.get('/delPost', (req, res) => {
    res.send('backend test')
})

// edit post from the json and sends response based on if it was deleted or not
router.get('/editPost', (req, res) => {
    res.send('backend test')
})

// sends all emails form the json
router.get('/subscriberEmailsGet', (req, res) => {
    res.send('backend test')
})

router.get('/subscriberEmailsDel', (req, res) => {
    res.send('backend test')
})

router.get('/subscriberEmailsAdd', (req, res) => {
    res.send('backend test')
})

router.get('/sendEmails', (req, res) => {
    res.send('backend test')
})

module.exports = router