const express = require('express');
const path = require('path');
const fs = require('fs');
const { Post } = require('./helper');

const app = express();
const port = process.env.PRODUCTION_PORT || 80;

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, '../dist')));

// Handle all routes and serve the main index.html file
app.get('*', async (req, res) => {
  const indexPath = path.join(__dirname, '../dist/index.html');

  // Read the index.html file
  fs.readFile(indexPath, 'utf-8', async (err, data) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }

    try {
      const postId = req.query.id; // Get the post ID from the query parameters

      // Define default meta tags
      const defaultMetaTags = `
        <meta property="og:title" content="OpenPress">
        <meta property="og:description" content="✨Fully open-source and customizable blog written in vuejs and nodejs">
        <meta property="og:image" content="https://user-images.githubusercontent.com/70224036/266075141-edcb7231-dd11-4de5-9ac5-adcc0f3e40b2.png">
      `;

      if (!postId) {
        // If there's no postId, set default meta tags
        data = data.replace('<head>', '<head>' + defaultMetaTags);
      } else {
        // Use your utility function to fetch the post from the database based on the ID
        const post = await Post.fetch_by_id(postId);

        if (post) {
          // Modify the data to include dynamic meta tags based on the post data
          data = data.replace(
            '<head>',
            '<head>' +
              `<meta property="og:title" content="${post.headline}">` +
              `<meta property="og:description" content="${post.text}">` +
              `<meta property="og:image" content="${post.imageUrl}">`
          );
        } else {
          // If the post is not found, set default meta tags
          data = data.replace('<head>', '<head>' + defaultMetaTags);
        }
      }

      // Send the modified HTML as a response
      res.send(data);
    } catch (error) {
      console.error("Error while fetching post data:", error);
      return res.status(500).send('Internal Server Error');
    }
  });
});

app.listen(port, () => {
  console.log(`Build is running on port ${port}`);
});
