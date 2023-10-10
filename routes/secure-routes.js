const express = require('express');
const { route } = require('./routes');
const router = express.Router();

router.get(
    '/profile',
    (req, res, next) => {
        res.json({
            message: 'welcome! Nice to see you.. ',
            user: req.user,
            token: req.query.secret_token
        })
    }
);

module.exports = router;