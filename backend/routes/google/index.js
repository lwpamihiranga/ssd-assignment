const express = require('express');
const router = express.Router();

// controllers
const { autthencticateController } = require('../../controllers/google');

router.get('/google/authenticate', autthencticateController);

module.exports = router;
