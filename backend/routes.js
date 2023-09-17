const express = require('express');
const fs = require('fs');

const { generate_token, verify_token } = require('./encryption.js');

const { User, Post, Email } = require('./helper');

const config = {
  secret_key: process.env.SECRET_KEY,
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
      config.secret_key,
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
  // if (await User.register((username = req.body.username), (password = req.body.password), (email = req.body.email))) {
  // return res.status(201).json({ message: 'Registration successful' });
  // } else {
  return res.status(400).send('Registration was not successful');
  // }
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
  let filters;

  if (req.body.filters === undefined) { filters = { headline: "" } }
  else if (typeof req.body.filters == "object") { filters = Object.keys(req.body.filters).length == 0 ? { headline: "" } : req.body.filters }

  return res.send(await Post.fetch_many_by_filter(filters, limit, page));
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
  let filters;

  if (req.body.filters === undefined) { filters = { headline: "" } }
  else if (typeof req.body.filters == "object") { filters = Object.keys(req.body.filters).length == 0 ? { headline: "" } : req.body.filters }

  return res.send(await Post.fetch_one_by_filter(filters, limit, page));
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
  if (verify_token(req.body.token, config.secret_key).isValid == true) {

    await Post.create(
      req.body.image_url,
      req.body.headline,
      req.body.text,
      req.body.html,
      req.body.author,
      req.body.tags,
      req.body.timestamp
    );
    res.send('Post successfully added');

  } else {
    return res.status(500).send('Invalid token');
  }
});

/**
 * Route: POST /delPost
 * 
 * Description: This route allows authenticated users to delete a post by its ID.
 *              It expects a valid authentication token in the request body for authorization.
 *              The user must be the author of the post to delete it.
 * 
 * Body Parameters:
 *   - token (string): A valid authentication token for user authorization.
 *   - id (number): The ID of the post to be deleted.
 * 
 * Output:
 *   - If the token is valid and the user is the author of the post, it responds with 'Post successfully deleted'.
 *   - If the token is invalid, it returns a 500 Internal Server Error with 'Invalid token'.
 *   - If the post doesn't exist, it returns a 500 Internal Server Error with "Post doesn't exist".
 *   - If the user is not the author of the post, it returns a 500 Internal Server Error with "This post can be deleted only by its author".
 */
router.get('/delPost', async (req, res) => {

  let user = verify_token(req.body.token, config.secret_key)
  let post = await Post.fetch_by_id(req.body.id)

  if (user.isValid == true) {

    if (post !== null) {

      if (post.author == user.payload.id) {

        await Post.delete_by_id(req.body.id);
        res.send("Post successfully deleted")

      } else { return res.status(500).send("This post can be deleted only by its author"); }

    } else { return res.status(500).send("Post doesn't exist"); }

  } else { return res.status(500).send("Invalid token"); }

})

// edit post from the json and sends response based on if it was deleted or not
router.get('/editPost', async (req, res) => {

  let user = verify_token(req.body.token, config.secret_key)
  let post = await Post.fetch_by_id(req.body.id)

  if (user.isValid == true) {

    if (post !== null) {

      if (post.author == user.payload.id) {

        await Post.update(
          req.body.id,
          req.body.image_url,
          req.body.headline,
          req.body.text,
          req.body.html,
          req.body.author,
          req.body.tags,
          req.body.timestamp
        );
        res.send("Post successfully edited")

      } else { return res.status(500).send("This post can be edited only by its author"); }

    } else { return res.status(500).send("Post doesn't exist"); }

  } else { return res.status(500).send("Invalid token"); }

})

// sends all emails form the json (needs the token system)
router.get('/subscriberEmailsGet', async (req, res) => {
  if (verify_token(req.body.token, config.secret_key).isValid == true) {

    let limit = req.body.limit ? limit : 1000;
    let page = req.body.page ? req.body.page : 1;

    res.send(await Email.fetch_all(limit, page));

  } else {
    return res.status(500).send('Invalid token');
  }
});

router.get('/subscriberEmailsDel', async (req, res) => {

  await Email.delete_by_email(req.body.email)
  res.send('Email successfully unsubscribed');

});

router.get('/subscriberEmailsAdd', async (req, res) => {

  await Email.new(req.body.email, req.body.timestamp)
  res.send('Email successfully subscribed');

});

// Will send emails (probably with node-mail or something)
// router.get('/sendEmails', async (req, res) => {

// });

module.exports = router;
