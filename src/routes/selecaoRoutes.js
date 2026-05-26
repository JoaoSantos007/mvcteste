const express = require('express');
const router = express.Router()

const selecaoController = require('../controllers/selecaoController')

router.get('/selecao', selecaoController.index)
router.delete('/selecao/:id', selecaoController.delete)
router.post('/selecao', selecaoController.store)
router.put('/selecao/:id', selecaoController.update)

module.exports = router