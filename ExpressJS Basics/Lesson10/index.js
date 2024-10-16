const express = require('express');
const { body, validationResult } = require('express-validator');
const userRouter = require('./routes/user');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to register a user with validation
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",userRouter);
// Simple test route
app.get('/test', (req, res) => {
    res.send('testing the server');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
