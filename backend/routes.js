const express = require('express');
const fs = require('fs');

const { generate_token, verify_token } = require('./encryption.js');

const { User, Post } = require('./helper');

const config = {
  secretKey: process.env.SECRET_KEY,
};

const router = express.Router();

router.get('/', async (req, res) => {
  return res.send('openpress backend :)');
});

// new version from dbapi branch
router.post('/login', async (req, res) => {
  if (await User.login((username = req.body.username), (password = req.body.password))) {
    let logged_user = (await User.fetch_by_username((username = req.body.username))).dataValues;
    let token = generate_token(
      { username: logged_user.username, id: logged_user.userid, admin: false },
      config.secretKey,
    );
    return res.send(token);
  } else {
    return res.status(401).send('Invalid username or password');
  }
});

// new version from dbapi branch
router.post('/register', async (req, res) => {
  if (await User.register((username = req.body.username), (password = req.body.password), (email = req.body.email))) {
    return res.status(201).json({ message: 'Registration successful' });
  } else {
    return res.status(400).send('Registration was not successful');
  }
});

// new version from dbapi branch
router.get('/getPosts', async (req, res) => {
  let limit = req.body.limit ? limit : 10;
  let page = req.body.page ? req.body.page : 1;
  return res.send(await Post.fetch_many_by_filter(req.body.filters, limit, page));
});

// new version from dbapi branch
router.get('/getPost', async (req, res) => {
  let limit = req.body.limit ? limit : 10;
  let page = req.body.page ? req.body.page : 1;
  return res.send(await Post.fetch_one_by_filter(req.body.filters, limit, page));
});

// new version from dbapi branch
router.post('/addPost', async (req, res) => {
  if (verify_token(req.body.token, config.secretKey).isValid == true) {
    await Post.create(
      req.body.image_url,
      req.body.headline,
      req.body.text,
      req.body.html,
      req.body.author,
      req.body.tags,
      req.body.timestamp,
    );
    res.send('Post successfully added');
  } else {
    return res.status(500).send('Invalid token');
  }
});

// deletes post from the json and sends response based on if it was deleted or not
router.get('/delPost', async (req, res) => {
  if (verify_token(req.body.token, config.secretKey).isValid == true) {
    res.send('do something');
  } else {
    return res.status(500).send('Invalid token');
  }
});

// edit post from the json and sends response based on if it was deleted or not
router.get('/editPost', async (req, res) => {
  if (verify_token(req.body.token, config.secretKey).isValid == true) {
    res.send('do something');
  } else {
    return res.status(500).send('Invalid token');
  }
});

// sends all emails form the json (needs the token system)
router.get('/subscriberEmailsGet', async (req, res) => {
  if (verify_token(req.body.token, config.secretKey).isValid == true) {
    fs.readFile('./data/emails.json', 'utf8', (err, data) => {
      if (err) return res.status(500).send('Failed to read emails file');

      const jsonArray = JSON.parse(data);
      res.send(jsonArray);
    });
  } else {
    return res.status(500).send('Invalid token');
  }
});

router.post('/subscriberEmailsDel', async (req, res) => {
  const email = req.body.email;

  fs.readFile('./data/emails.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Failed to read emails file');

    const jsonArray = JSON.parse(data).filter((item) => item !== email);

    fs.writeFile('./data/emails.json', JSON.stringify(jsonArray), 'utf8', (err) => {
      if (err) return res.status(500).send('Failed to update emails file');
      res.send('Email was successfully deleted');
    });
  });
});

router.get('/subscriberEmailsAdd', async (req, res) => {
  const email = req.body.email;

  fs.readFile('./data/emails.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Failed to read emails file');

    const jsonArray = JSON.parse(data);
    jsonArray.push(email);

    fs.writeFile('./data/emails.json', JSON.stringify(jsonArray), 'utf8', (err) => {
      if (err) return res.status(500).send('Failed to write to emails file');
      res.send('Email was successfully added to the email list');
    });
  });
});

router.get('/sendEmails', async (req, res) => {
  if (verify_token(req.body.token, config.secretKey).isValid == true) {
    res.send('Emails sent');
  } else {
    return res.status(500).send('Invalid token');
  }
});

module.exports = router;
