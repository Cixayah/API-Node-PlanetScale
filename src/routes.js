const express = require('express');
const router = express.Router();

const controller = require('./controllers/controller');

router.get('/carros', controller.getAll);
module.exports = router;