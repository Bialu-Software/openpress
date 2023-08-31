const express = require("express")
const fs = require('fs')
const config = require("../config.json").backend

const { generate_token, verify_token } = require("./encryption.js")

const { User, Post } = require("./helper");

const router = express.Router()

router.get('/', async (req, res) => {
    return res.send('openpress backend :)')
})

router.post('/login', async (req, res) => {

    if (await User.login(username = req.body.username, password = req.body.password)) {

        let logged_user = (await User.fetch_by_username(username = req.body.username)).dataValues
        let token = generate_token({ username: logged_user.username, id: logged_user.userid, admin: false }, config.secret_key);
        return res.send(token)

    } else { return res.status(401).send("Invalid username or password"); }

})

router.post('/register', async (req, res) => {

    if (await User.register(username = req.body.username, password = req.body.password, email = req.body.email)) {

        return res.status(201).json({ message: 'Registration successful' });

    } else { return res.status(400).send("Registration was not successful"); }

})

// send more posts
router.get('/getPosts', async (req, res) => {

    // ---- OLD CODE ----

    // let page = req.body.page - 1
    // let posts_per_page = req.body.posts_per_page
    // let filters = req.body.filters // headline, tags (with #), text

    // if (filters != undefined || Object.keys(!filters).length < 0 ) {
    //     filtered_posts = filter_posts(filters)
    // } else {
    //     filtered_posts = posts
    // }

    // requested_posts = filtered_posts.slice(page * posts_per_page, (page * posts_per_page) + posts_per_page)

    // // delete html part of posts for better performance on web
    // requested_posts.forEach((post) => {
    //     delete post.html;
    // });

    // res.send({ posts: requested_posts, max_page: Math.ceil(filtered_posts.length / posts_per_page) })

    // ---- OLD CODE ----
    // ---- NEW CODE ----

    // currently sends all posts. 
    let limit = req.body.limit ? limit : 10;
    let page = req.body.page ? req.body.page : 1;
    return res.send(await Post.fetch_all(limit = limit, page = page))
})

// sends post based on id or name (with all of the text)
router.get('/getPost', async (req, res) => {
    // use the filter_posts function
    // add author info

    res.send("does not work")
})

// gets info about the post then adds it to the json and sends response based on if the post was saved or not
router.post('/addPost', async (req, res) => {
    if (verify_token(req.body.token, config.secret_key).isValid == true) {

        await Post.create(headline = req.body.headline, text = req.body.text, html = req.body.html, image_url = req.body.image_url, tags = req.body.tags, author = req.body.author, timestamp = req.body.timestamp)
        // await models.post.create({ headline: req.body.headline, text: req.body.text, html: req.body.html, image_url: req.body.image_url, author: req.body.author, timestamp: req.body.timestamp });
        res.send("Post successfully added")
    } else {
        return res.status(500).send("Invalid token");
    }
})

// deletes post from the json and sends response based on if it was deleted or not
router.get('/delPost', async (req, res) => {
    if (verify_token(req.body.token, config.secret_key).isValid == true) {
        res.send("do something")
    } else {
        return res.status(500).send("Invalid token");
    }
})

// edit post from the json and sends response based on if it was deleted or not
router.get('/editPost', async (req, res) => {
    if (verify_token(req.body.token, config.secret_key).isValid == true) {
        res.send("do something")
    } else {
        return res.status(500).send("Invalid token");
    }
})

// sends all emails form the json (needs the token system)
router.get('/subscriberEmailsGet', async (req, res) => {
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

router.post('/subscriberEmailsDel', async (req, res) => {
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


router.get('/subscriberEmailsAdd', async (req, res) => {
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


router.get('/sendEmails', async (req, res) => {
    if (verify_token(req.body.token, config.secret_key).isValid == true) {
        res.send("Emails sent")
    } else {
        return res.status(500).send("Invalid token");
    }
})

module.exports = router