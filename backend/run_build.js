const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80; // Use port 80 for HTTP

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, '../dist')));

// Handle all routes and serve the main index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Build is running on port ${port}`);
});
