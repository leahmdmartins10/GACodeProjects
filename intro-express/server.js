const express = require('express');

console.log('This is our server');

const PORT = process.env.PORT || 3000; // all caps variables are look up values

const app = express();

app.listen(PORT, function() {
    console.log(`Express server listeneing on port ${PORT}`);
})