const express = require('express');
const userRouter = express.Router();
const { body, validationResult } = require('express-validator');
const { runValidation } = require('../validation/auth');
const { registerUser,loginUser } = require('../controllers/user');
const {userRegisterValidation, userLoginValidation} = require('../validation/newAuth');

// Route to register a user with validation
userRouter.post('/register',userRegisterValidation, runValidation,
    registerUser
);
// for user login
userRouter.post('/login',
    // Input validation
    userLoginValidation,runValidation,
    loginUser
);


module.exports = userRouter;