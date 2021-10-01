const express = require('express');
const router = express.Router();

// controllers
const {
    autthencticateController,
    saveContoller,
} = require('../../controllers/google');

router.get('/google/authenticate', autthencticateController);
router.get('/google/save', saveContoller);

module.exports = router;
