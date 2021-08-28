const express = require('express');
const fs = require('fs'); // makes it easy to read and write to files on the server
const path = require('path');

const app = express();

// Creates a single video route. When requested, it will send a video file back to the client.
app.get('/video', (req, res) => {
    res.sendFile('assets/sample.mp4', { root: __dirname });
});

// Sets up server to listen on port 4000
app.listen(4000, () => {
    console.log('Listening on port 4000!')
});