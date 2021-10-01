const express = require('express');
const router = express.Router();

// controllers
const {
    getAllPostContoller,
    savePostController,
} = require('../../controllers/post');

router.get('/post', getAllPostContoller);
router.post('/post', savePostController);

module.exports = router;
