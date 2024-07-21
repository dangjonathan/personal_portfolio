const express = require('express');
const path = require('path');

const app = express();

// Use environment variable for port, with fallback to 3000
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname + "/public/"));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));
