const express = require("express")
const { filter_posts } = require("./filter.js")
const { generate_token } = require("./encryption.js")

let posts = require("./data/posts.json")
let profiles = require("./data/profiles.json")
let emails = require("./data/emails.json")

const secretKey = "load-me-from-env-or-config"; // This is used in token generation and verification

const router = express.Router()

// basic entry page
router.get('/', (req, res) => {
    res.send('blog backend :)')
})

// after sucessfull login sends auth token
router.post('/login', (req, res) => {
    console.log(req.body);
    /*
    ! This does nothing to check whether the user exists nor does it check whether password hashes match.
    It is up to this function to fetch the username from DB, check password hashes and then
    either return an error or generate and return a session cookie with the token.
    A password hash function is present in encryption.js under the name salted_hash_password(PASSWORD_HERE);
    */
    token = generate_token({username: "gumernus", id: 1, admin: true}, "lol");
    res.send(token)
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