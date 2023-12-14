const express = require('express');
const router = express.Router();

const controller = require('./controllers/controller');

router.get('/carros', controller.getAll);
router.get('/carro/:codigo', controller.getOne);
router.post('/carro', controller.insert);
router.put('/carro/:codigo', controller.alter);

module.exports = router;