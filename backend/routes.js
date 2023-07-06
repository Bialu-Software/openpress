const express = require("express")
const fs = require('fs')
const config = require("../config.json").backend

const { filter_posts } = require("./filter.js")
const { generate_token, verify_token } = require("./encryption.js")

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
    /*
    ! This does nothing to check whether the user exists nor does it check whether password hashes match.
    It is up to this function to fetch the username from DB, check password hashes and then
    either return an error or generate and return a session cookie with the token.
    A password hash function is present in encryption.js under the name salted_hash_password(PASSWORD_HERE);
    */
    token = generate_token({ username: "gumernus", id: 1, admin: true }, config.secret_key);
    res.send(token)
})

// send more posts
router.get('/getPosts', (req, res) => {
    let page = req.body.page - 1
    let posts_per_page = req.body.posts_per_page
    let filters = req.body.filters // headline, tags (with #), text

    if (filters != undefined || Object.keys(!filters).length < 0 ) {
        filtered_posts = filter_posts(filters)
    } else {
        filtered_posts = posts
    }

    requested_posts = filtered_posts.slice(page * posts_per_page, (page * posts_per_page) + posts_per_page)

    // delete html part of posts for better performance on web
    requested_posts.forEach((post) => {
        delete post.html;
    });

    res.send({ posts: requested_posts, max_page: Math.ceil(filtered_posts.length / posts_per_page) })
})

// sends post based on id or name (with all of the text)
router.get('/getPost', (req, res) => {
    // use the filter_posts function
    // add author info

    res.send(result)
})

// gets info about the post then adds it to the json and sends response based on if the post was saved or not
router.get('/addPost', (req, res) => {
    if (verify_token(req.body.token, config.secret_key).isValid == true) {
        res.send("do something")
    } else {
        return res.status(500).send("Invalid token");
    }
})

// deletes post from the json and sends response based on if it was deleted or not
router.get('/delPost', (req, res) => {
    if (verify_token(req.body.token, config.secret_key).isValid == true) {
        res.send("do something")
    } else {
        return res.status(500).send("Invalid token");
    }
})

// edit post from the json and sends response based on if it was deleted or not
router.get('/editPost', (req, res) => {
    if (verify_token(req.body.token, config.secret_key).isValid == true) {
        res.send("do something")
    } else {
        return res.status(500).send("Invalid token");
    }
})

// sends all emails form the json (needs the token system)
router.get('/subscriberEmailsGet', (req, res) => {
    if (verify_token(req.body.token, config.secret_key).isValid == true) {
        fs.readFile("./data/emails.json", "utf8", (err, data) => {
            if (err) return res.status(500).send("Failed to read emails file");

            const jsonArray = JSON.parse(data);
            res.send(jsonArray);
        });
    } else {
        return res.status(500).send("Invalid token");
    }
});

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
    if (verify_token(req.body.token, config.secret_key).isValid == true) {
        res.send("Emails sent")
    } else {
        return res.status(500).send("Invalid token");
    }
})

module.exports = router