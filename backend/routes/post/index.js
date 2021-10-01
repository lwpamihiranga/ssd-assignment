const express = require('express');
const router = express.Router();

// controllers
const { getAllPostContoller } = require('../../controllers/post');

router.get('/post', getAllPostContoller);

module.exports = router;
