const express = require('express');
const fs = require('fs'); // Import the 'fs' module

const app = express();

app.use(express.static('./'))
app.listen(3000, () => console.log('Server running at http://localhost:3000/'));
