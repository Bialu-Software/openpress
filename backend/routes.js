const express = require("express")
const fs = require('fs')
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
    token = generate_token({ username: "gumernus", id: 1, admin: true }, "lol");
    res.send(token)
})

// if no filter then sends all posts from json and if filter sends filtered posts (without text)
router.get('/getPosts', (req, res) => {
    let page = req.body.page - 1
    requested_posts = posts.slice(page * 10, (page * 10) + 10)
    // use the filter_posts function

    res.send({ posts: requested_posts, max_page: Math.ceil(posts.length / 10) })
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

// sends all emails form the json (needs the token system)
// router.get('/subscriberEmailsGet', (req, res) => {
//     fs.readFile("./data/emails.json", "utf8", (err, data) => {
//         if (err) return res.status(500).send("Failed to read emails file");

//         const jsonArray = JSON.parse(data);
//         res.send(jsonArray);
//     });
// });

router.post('/subscriberEmailsDel', (req, res) => {
    const email = req.body.email;

    fs.readFile("./data/emails.json", "utf8", (err, data) => {
        if (err) return res.status(500).send("Failed to read emails file");

        const jsonArray = JSON.parse(data).filter(item => item !== email);

        fs.writeFile("./data/emails.json", JSON.stringify(jsonArray), "utf8", err => {
            if (err) return res.status(500).send("Failed to update emails file");
            res.send("Email was successfully deleted");
        });
    });
});


router.get('/subscriberEmailsAdd', (req, res) => {
    const email = req.body.email;

    fs.readFile("./data/emails.json", "utf8", (err, data) => {
        if (err) return res.status(500).send("Failed to read emails file");

        const jsonArray = JSON.parse(data);
        jsonArray.push(email);

        fs.writeFile("./data/emails.json", JSON.stringify(jsonArray), "utf8", (err) => {
            if (err) return res.status(500).send("Failed to write to emails file");
            res.send("Email was successfully added to the email list");
        });
    });
});


router.get('/sendEmails', (req, res) => {
    res.send('backend test')
})

module.exports = router