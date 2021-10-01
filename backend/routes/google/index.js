const express = require('express');
const router = express.Router();

// controllers
const {
    autthencticateController,
    saveContoller,
    uploadController,
} = require('../../controllers/google');

router.get('/google/authenticate', autthencticateController);
router.get('/google/save', saveContoller);
router.post('/google/upload', uploadController);

module.exports = router;
