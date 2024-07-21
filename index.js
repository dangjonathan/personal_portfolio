const express = require('express');
const fs = require('fs'); // Import the 'fs' module
const path = require('path'); // Import the 'path' module
const app = express();

// Use environment variable for port, with fallback to 3000
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, './')));

// Define a route to serve the index.html file
app.get(['/home', '/', '/main'], (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));
