const express = require('express');
const router = express.Router()
const jogadorController = require('../controllers/jogadorController')

router.get('/jogador', jogadorController.index)
router.delete('/jogador/:id', jogadorController.index)
router.post('/jogador', jogadorController.store);
router.put('/jogador/:id', jogadorController.update);

module.exports = router