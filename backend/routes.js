const express = require('express');
const fs = require('fs');

const { generate_token, verify_token } = require('./encryption.js');

const { User, Post } = require('./helper');

const config = {
  secretKey: process.env.SECRET_KEY,
};

const router = express.Router();


/**
 * Route: GET /
 * 
 * Description: This route serves as the root endpoint for the OpenPress backend.
 *              It responds with a message indicating that it's the OpenPress backend.
 * 
 * Body Parameters: None
 * 
 * Output: A simple text response 'openpress backend :)' indicating the OpenPress backend.
 */
router.get('/', async (req, res) => {
  return res.send('openpress backend :)');
});

/**
 * Route: POST /login
 * 
 * Description: This route handles user login authentication.
 *              It expects a username and password in the request body and validates them.
 * 
 * Body Parameters:
 *   - username (string): The username of the user trying to log in.
 *   - password (string): The password of the user trying to log in.
 * 
 * Output:
 *   - If authentication is successful, it returns a JSON Web Token (JWT) containing user information.
 *   - If authentication fails, it returns a 401 Unauthorized status with an error message.
 */
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

/**
 * Route: POST /register
 * 
 * Description: This route handles user registration.
 *              It expects a username, password, and email in the request body for user registration.
 * 
 * Body Parameters:
 *   - username (string): The desired username for the new user.
 *   - password (string): The password for the new user.
 *   - email (string): The email address for the new user.
 * 
 * Output:
 *   - If registration is successful, it responds with a 201 Created status.
 *   - If registration fails, it responds with a 400 Bad Request status.
 */
router.post('/register', async (req, res) => {
  if (await User.register((username = req.body.username), (password = req.body.password), (email = req.body.email))) {
    return res.status(201).json({ message: 'Registration successful' });
  } else {
    return res.status(400).send('Registration was not successful');
  }
});

/**
 * Route: GET /getPosts
 * 
 * Description: This route retrieves a list of posts based on specified filters, limit, and page.
 *              It expects optional filters, limit, and page parameters in the request body.
 *              If no filters, limit, or page are provided, it defaults to returning 10 posts on page 1.
 * 
 * Body Parameters:
 *   - filters (object): Optional filters to apply when fetching posts.
 *   - limit (number): Optional. The maximum number of posts to retrieve (default: 10).
 *   - page (number): Optional. The page number of the results to retrieve (default: 1).
 * 
 * Output:
 *   - A JSON response containing a list of posts based on the provided filters, limit, and page.
 */
router.get('/getPosts', async (req, res) => {
  let limit = req.body.limit ? limit : 10;
  let page = req.body.page ? req.body.page : 1;
  return res.send(await Post.fetch_many_by_filter(req.body.filters, limit, page));
});

/**
 * Route: GET /getPost
 * 
 * Description: This route retrieves a single post based on specified filters, limit, and page.
 *              It expects optional filters, limit, and page parameters in the request body.
 *              If no filters, limit, or page are provided, it defaults to returning a single post.
 * 
 * Body Parameters:
 *   - filters (object): Optional filters to apply when fetching the post.
 *   - limit (number): Optional. The maximum number of posts to retrieve (default: 10).
 *   - page (number): Optional. The page number of the result to retrieve (default: 1).
 * 
 * Output:
 *   - A JSON response containing the post that matches the provided filters, limit, and page.
 */
router.get('/getPost', async (req, res) => {
  let limit = req.body.limit ? limit : 10;
  let page = req.body.page ? req.body.page : 1;
  return res.send(await Post.fetch_one_by_filter(req.body.filters, limit, page));
});

/**
 * Route: POST /addPost
 * 
 * Description: This route allows authenticated users to add a new post.
 *              It expects a valid authentication token in the request body for authorization.
 * 
 * Body Parameters:
 *   - token (string): A valid authentication token for user authorization.
 *   - image_url (string): The URL of the post's image.
 *   - headline (string): The headline or title of the post.
 *   - text (string): The text content of the post.
 *   - html (string): The HTML content of the post (optional).
 *   - author (string): The author of the post.
 *   - tags (array): An array of tags associated with the post.
 *   - timestamp (string): The timestamp for the post's creation.
 * 
 * Output:
 *   - If the token is valid, it responds with 'Post successfully added'.
 *   - If the token is invalid, it returns a 500 Internal Server Error with 'Invalid token'.
 */
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

//
// TODO FROM NOW ON
//

// deletes post from the json and sends response based on if it was deleted or not
router.get('/delPost', async (req, res) => {
  if (verify_token(req.body.token, config.secret_key).isValid == true) {
    // check if the outhor of the post is the same as in the post that will be deleted and if not dont delete it.
    res.send("do something")
  } else {
    return res.status(500).send("Invalid token");
  }
})

// edit post from the json and sends response based on if it was deleted or not
router.get('/editPost', async (req, res) => {
  if (verify_token(req.body.token, config.secret_key).isValid == true) {
    // basically addPost 
    res.send("do something")
  } else {
    return res.status(500).send("Invalid token");
  }
})

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
