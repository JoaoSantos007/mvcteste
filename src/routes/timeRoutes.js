const express = require('express')
const router = express.Router()
const timeController = require('../controllers/timeController')

router.get('/times', timeController.index)
router.get('/times/:id', timeController.show)
router.post('/times', timeController.store)
router.put('/times/:id', timeController.update)
router.delete('/times/:id', timeController.destroy)

module.exports = router
