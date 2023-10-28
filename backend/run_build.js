const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PRODUCTION_PORT || 80;

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, '../dist')));

// Handle all routes and serve the main index.html file
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../dist/index.html');

  // Read the index.html file
  fs.readFile(indexPath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }

    // Modify the data to include the desired meta tags
    data = data.replace(
      '<head>',
      '<head>' +
        '<meta property="og:title" content="Your Open Graph Title">' +
        '<meta property="og:description" content="Your Open Graph Description">' +
        '<meta property="og:image" content="URL to your Open Graph Image">'
    );

    // Send the modified HTML as a response
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Build is running on port ${port}`);
});
