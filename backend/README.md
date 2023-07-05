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
  - Request Body: `{ "page": 1 }`
  - Response: Object containing posts and max_page

- `GET /getPost`
  - Description: Retrieve a specific post by ID or name
  - Request Body: `{ }`
  - Response: `backend test`

- `GET /addPost`
  - Description: Add a new post to the JSON file
  - Request Body: `{ }`
  - Response: `backend test`

- `GET /delPost`
  - Description: Delete a post from the JSON file
  - Request Body: `{ }`
  - Response: `backend test`

- `GET /editPost`
  - Description: Edit a post in the JSON file
  - Request Body: `{ }`
  - Response: `backend test`

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
  - Response: `backend test`

Please note that the actual functionality and implementation of these routes may vary. Make sure to provide the appropriate request bodies and handle responses accordingly.

