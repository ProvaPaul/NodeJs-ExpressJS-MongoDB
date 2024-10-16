const { body, validationResult } = require('express-validator');
// checks validation
exports.runValidation = (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
