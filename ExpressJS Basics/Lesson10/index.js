const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple test route
app.get('/test', (req, res) => {
    res.send('testing the server');
});

// Route to register a user with validation
app.post('/api/register',
    // Input validation
    body('name')
        .trim()
        .notEmpty().withMessage('Name is missing')
        .isLength({ min: 5 }).withMessage('Name must be at least 5 characters long')
        .isLength({ max: 20 }).withMessage('Name must be at most 20 characters long'),

    body('email')
        .trim()
        .notEmpty().withMessage('Email is missing')
        .isEmail().withMessage('Invalid email address'),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is missing')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .isLength({ max: 20 }).withMessage('Password must be at most 20 characters long'),

    body('dob')
        .trim()
        .notEmpty().withMessage('Date of birth is missing')
        .isISO8601().toDate().withMessage('Invalid date of birth format'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },

    (req, res) => {
        try {
            const { name, email, password, dob } = req.body;
            const newUser = { name, email, password, dob };
            return res.json({
                message: 'User registered successfully',
                newUser
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }
);



// for user login
app.post('/api/login',
    // Input validation
    body('email')
        .trim()
        .notEmpty().withMessage('Email is missing')
        .isEmail().withMessage('Invalid email address'),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is missing')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .isLength({ max: 20 }).withMessage('Password must be at most 20 characters long'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },

    (req, res) => {
        try {
            const { email, password} = req.body;
            if(email ==='prova@gmail.com' && password === '123456') {
            const newUser = { email, password };
            return res.json({
                message: 'User loggedIn successfully',
            });
        }
        else {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }    
        }  
        catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }
);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
