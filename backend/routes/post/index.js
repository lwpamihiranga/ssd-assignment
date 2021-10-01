const express = require('express');
const router = express.Router();

router.get('/post', (req, res, next) => {
    res.status(200).json({
        result: {
            message: '/api/post route',
        },
    });
});

module.exports = router;
