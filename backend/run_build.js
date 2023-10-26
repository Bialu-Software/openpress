const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PRODUCTION_PORT || 80;

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, '../dist')));

// Handle all routes and serve the main index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Build is running on port ${port}`);
});
