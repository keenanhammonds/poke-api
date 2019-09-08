const express = require('express')
const router = express.Router()
const typeController = require('../controllers/type')

router.get('/type/:name', typeController.showByName)


module.exports = router