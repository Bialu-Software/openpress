# OUTDATED!

# OpenPress API Routes Documentation

## Route: `/`

**Description**: This route serves as the root endpoint for the OpenPress backend. It responds with a message indicating that it's the OpenPress backend.

<details>
<summary><strong>Usage (Axios)</strong></summary>

```javascript
axios
  .get('http://localhost:3000/api/')
  .then((response) => {
    console.log(response.data); // 'openpress backend :)'
  })
  .catch((error) => {
    console.error(error);
  });
```

</details>

<details>
<summary><strong>Usage (cURL)</strong></summary>

```bash
curl -X GET http://localhost:3000/api/
```

</details>

## Route: `/login`

**Description**: This route handles user login authentication. It expects a username and password in the request body and validates them.

**Body Parameters**:

- `username` (string): The username of the user trying to log in.
- `password` (string): The password of the user trying to log in.

<details>
<summary><strong>Usage (Axios)</strong></summary>

```javascript
const loginData = {
  username: 'your_username',
  password: 'your_password',
};

axios
  .post('http://localhost:3000/api/login', loginData)
  .then((response) => {
    console.log(response.data); // JSON Web Token (JWT) if successful
  })
  .catch((error) => {
    console.error(error);
  });
  ```

</details>

<details>
<summary><strong>Usage (cURL)</strong></summary>

```bash
curl -X POST -d "username=your_username&password=your_password" http://localhost:3000/api/login
```

</details>

## Route: `/register`

**Description**: This route handles user registration. It expects a username, password, and email in the request body for user registration.

**Body Parameters**:

- `username` (string): The desired username for the new user.
- `password` (string): The password for the new user.
- `email` (string): The email address for the new user.

<details>
<summary><strong>Usage (Axios)</strong></summary>

```javascript
const registrationData = {
  username: 'new_user',
  password: 'new_password',
  email: 'new@example.com',
};

axios
  .post('http://localhost:3000/api/register', registrationData)
  .then((response) => {
    console.log(response.data); // 'Registration successful' if successful
  })
  .catch((error) => {
    console.error(error);
  });
  ```

</details>

<details>
<summary><strong>Usage (cURL)</strong></summary>

```bash
curl -X POST -d "username=new_user&password=new_password&email=new@example.com" http://localhost:3000/api/register
```

</details>

## Route: `/getPosts`

**Description**: This route retrieves a list of posts based on specified filters, limit, and page. It expects optional filters, limit, and page parameters in the request body. If no filters, limit, or page are provided, it defaults to returning 10 posts on page 1.

**Body Parameters**:

- `filters` (object): Optional filters to apply when fetching posts.
- `limit` (number): Optional. The maximum number of posts to retrieve (default: 10).
- `page` (number): Optional. The page number of the results to retrieve (default: 1).

<details>
<summary><strong>Usage (Axios)</strong></summary>

```javascript
const requestData = {
  filters: { key: 'value' }, // Optional filters
  limit: 10, // Optional limit
  page: 1, // Optional page
};

axios
  .get('http://localhost:3000/api/getPosts', { data: requestData })
  .then((response) => {
    console.log(response.data); // List of posts based on the provided filters, limit, and page
  })
  .catch((error) => {
    console.error(error);
  });
  ```

</details>

<details>
<summary><strong>Usage (cURL)</strong></summary>

```bash
curl -X GET -d "filters={\"key\":\"value\"}&limit=10&page=1" http://localhost:3000/api/getPosts
```

</details>

## Route: `/getPost`

**Description**: This route retrieves a single post based on specified filters, limit, and page. It expects optional filters, limit, and page parameters in the request body. If no filters, limit, or page are provided, it defaults to returning a single post.

**Body Parameters**:

- `filters` (object): Optional filters to apply when fetching the post.
- `limit` (number): Optional. The maximum number of posts to retrieve (default: 10).
- `page` (number): Optional. The page number of the result to retrieve (default: 1).

<details>
<summary><strong>Usage (Axios)</strong></summary>

```javascript
const requestData = {
  filters: { key: 'value' }, // Optional filters
  limit: 10, // Optional limit
  page: 1, // Optional page
};

axios
  .get('http://localhost:3000/api/getPost', { data: requestData })
  .then((response) => {
    console.log(response.data); // Single post based on the provided filters, limit, and page
  })
  .catch((error) => {
    console.error(error);
  });
  ```

</details>

<details>
<summary><strong>Usage (cURL)</strong></summary>

```bash
curl -X GET -d "filters={\"key\":\"value\"}&limit=10&page=1" http://localhost:3000/api/getPost
```

</details>

## Route: `/addPost`

**Description**: This route allows authenticated users to add a new post. It expects a valid authentication token in the request body for authorization.

**Body Parameters**:

- `token` (string): A valid authentication token for user authorization.
- `image_url` (string): The URL of the post's image.
- `headline` (string): The headline or title of the post.
- `text` (string): The text content of the post.
- `html` (string): The HTML content of the post (optional).
- `author` (string): The author of the post.
- `tags` (array): An array of tags associated with the post.
- `timestamp` (string): The timestamp for the post's creation.

<details>
<summary><strong>Usage (Axios)</strong></summary>

```javascript
const postData = {
  token: 'valid_token', // Valid authentication token
  image_url: 'post_image_url',
  headline: 'post_headline',
  text: 'post_text',
  html: 'post_html', // Optional HTML content
  author: 'post_author',
  tags: ['tag1', 'tag2'], // Array of tags
  timestamp: 'post_timestamp',
};

axios
  .post('http://localhost:3000/api/addPost', postData)
  .then((response) => {
    console.log(response.data); // 'Post successfully added' if successful
  })
  .catch((error) => {
    console.error(error);
  });
  ```

</details>

<details>
<summary><strong>Usage (cURL)</strong></summary>

```bash
curl -X POST -d "token=valid_token&image_url=post_image_url&headline=post_headline&text=post_text&html=post_html&author=post_author&tags=[\"tag1\",\"tag2\"]&timestamp=post_timestamp" http://localhost:3000/api/addPost
```

</details>

## Route: `/delPost`

**Description**: This route allows authenticated users to delete a post by its ID. It expects a valid authentication token in the request body for authorization. The user must be the author of the post to delete it.

**Body Parameters**:

- `token` (string): A valid authentication token for user authorization.
- `id` (number): The ID of the post to be deleted.

<details>
<summary><strong>Usage (Axios)</strong></summary>

```javascript
const delPostData = {
  token: 'valid_token', // Valid authentication token
  id: 12345, // ID of the post to delete
};

axios
  .post('http://localhost:3000/api/delPost', delPostData)
  .then((response) => {
    console.log(response.data); // 'Post successfully deleted' if successful
  })
  .catch((error) => {
    console.error(error);
  });
  ```

</details>

<details>
<summary><strong>Usage (cURL)</strong></summary>

```bash
curl -X POST -d "token=valid_token&id=12345" http://localhost:3000/api/delPost
```

</details>
