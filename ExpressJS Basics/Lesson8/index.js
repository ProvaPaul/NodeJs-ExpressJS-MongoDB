const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const multer = require('multer');

// Serve a simple test route
app.get('/test', (req, res) => {
    res.send('testing api');
});

// Serve the HTML form for file upload
app.get('/register', (req, res) => {    
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name);
    }
});

const upload = multer({ storage: storage });

// Handle file upload
app.post('/register', upload.single('image'), (req, res) => {    
    res.status(200).send('File uploaded successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
