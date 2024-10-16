const {check} = require('express-validator');

exports.userRegisterValidation = [
    check('name')
        .trim()
        .notEmpty().withMessage('Name is missing')
        .isLength({ min: 5 }).withMessage('Name must be at least 5 characters long')
        .isLength({ max: 20 }).withMessage('Name must be at most 20 characters long'),

    check('email')
        .trim()
        .notEmpty().withMessage('Email is missing')
        .isEmail().withMessage('Invalid email address'),

    check('password')
        .trim()
        .notEmpty().withMessage('Password is missing')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .isLength({ max: 20 }).withMessage('Password must be at most 20 characters long'),

    check('dob')
        .trim()
        .notEmpty().withMessage('Date of birth is missing')
        .isISO8601().toDate().withMessage('Invalid date of birth format'),
]

// for login
exports.userLoginValidation = [
    check('email')
        .trim()
        .notEmpty().withMessage('Email is missing')
        .isEmail().withMessage('Invalid email address'),

    check('password')
        .trim()
        .notEmpty().withMessage('Password is missing')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .isLength({ max: 20 }).withMessage('Password must be at most 20 characters long'),
]