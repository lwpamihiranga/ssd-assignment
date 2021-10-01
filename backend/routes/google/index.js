const express = require('express');
const router = express.Router();

router.get('/google/', (req, res) => {
    res.status(200).json({
        result: {
            message: '/api/google route',
        },
    });
});

module.exports = router;
