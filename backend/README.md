If you are running this API separately run it from this folder and with command `node index.js`

## API Documentation

This is the documentation for the blog backend API.

### Base URL

The base URL for all endpoints is: `http://localhost:backend_port/api`

### Routes

- `GET /`
  - Description: Basic entry page
  - Response: `blog backend :)`

- `POST /login`
  - Description: Authenticate user and generate an authentication token
  - Request Body: `{ }`
  - Response: Authentication token

- `GET /getPosts`
  - Description: Retrieve posts from the JSON file
  - Request Body: `{ "page": 1, "posts_per_page": 10, "filters": { "headline": "example", "text": "example", "tags": "#example" } }`
  - Response: Object containing posts and max_page

- `GET /getPost`
  - Description: Retrieve a specific post by ID or name
  - Request Body: `{ }`
  - Response: `backend test`

- `GET /addPost`
  - Description: Add a new post to the JSON file
  - Request Body: `{ "token": "authentication_token" }`
  - Response: `do something` if the token is valid, or `Invalid token` if the token is invalid

- `GET /delPost`
  - Description: Delete a post from the JSON file
  - Request Body: `{ "token": "authentication_token" }`
  - Response: `do something` if the token is valid, or `Invalid token` if the token is invalid

- `GET /editPost`
  - Description: Edit a post in the JSON file
  - Request Body: `{ "token": "authentication_token" }`
  - Response: `do something` if the token is valid, or `Invalid token` if the token is invalid

- `GET /subscriberEmailsGet`
  - Description: Retrieve all emails from the emails JSON file
  - Request Body: `{ "token": "authentication_token" }`
  - Response: Array of email addresses if the token is valid, or `Invalid token` if the token is invalid

- `POST /subscriberEmailsDel`
  - Description: Delete an email from the emails JSON file
  - Request Body: `{ "email": "example@example.com" }`
  - Response: Success message if the email was deleted successfully

- `GET /subscriberEmailsAdd`
  - Description: Add an email to the emails JSON file
  - Request Body: `{ "email": "example@example.com" }`
  - Response: Success message if the email was added successfully

- `GET /sendEmails`
  - Description: Send emails
  - Request Body: `{ "token": "authentication_token" }`
  - Response: `Emails sent` if the token is valid, or `Invalid token` if the token is invalid

Please note that the actual functionality and implementation of these routes may vary. Make sure to provide the appropriate request bodies and handle responses accordingly.
