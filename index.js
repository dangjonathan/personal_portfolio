const express = require('express');
const fs = require('fs'); // Import the 'fs' module

const app = express();

app.use(express.static('./'))
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));
