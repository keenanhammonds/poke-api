const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemon')

router.get('/', pokemonController.show)
router.get('/name/:name', pokemonController.showByName)
router.get('/id/:id', pokemonController.showById)
router.get('/tags/:tags', pokemonController.showByTag)

module.exports = router;