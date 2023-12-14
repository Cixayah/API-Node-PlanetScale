const express = require('express');
const router = express.Router();

const controller = require('./controllers/controller');

router.get('/carros', controller.getAll);
router.get('/carro/:codigo', controller.getOne);
module.exports = router;