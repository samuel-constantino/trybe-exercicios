const express = require('express');
const plantController = require('../controllers/plants');
const router = express.Router();

router.get('/', plantController.getAll);

module.exports = router;