const express = require('express');
const router = express.Router()
const produtoController = require('../controllers/produtosController')

router.get('/produtos', produtoController.index)
router.delete('/produtos/:id', produtoController.index)
router.post('/produtos', produtoController.store);
router.put('/produtos/:id', produtoController.update);

module.exports = router