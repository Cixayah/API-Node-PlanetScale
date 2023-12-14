const express = require('express');
const router = express.Router();

const controller = require('./controllers/controller');

//Pegar os resultados
router.get('/carros', controller.getAll);
//Pegar apenas um
router.get('/carro/:codigo', controller.getOne);
//Create
router.post('/carro', controller.insert);
//Update
router.put('/carro/:codigo', controller.alter);
//Delete
router.delete('/carro/:codigo', controller.delete);

module.exports = router;