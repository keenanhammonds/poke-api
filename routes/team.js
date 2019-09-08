const express = require('express');
const router = express.Router()
const teamController = require(../controllers/teamController)

router.get('/', teamController.show)
router.get('/pokemon/:pokemon', teamController.showByPokemon)
router.get('/name/:name', teamController.showByName)
router.get('/id/:id', teamController.showById)
router.delete('/delete/id/:id', teamController.deleteById)
router.delete('/delete/name/:name', teamController.deleteByName)
router.put('/edit/id/:id', teamController.editById)
router.put('/edit/name/:name', teamController.editByName)
router.post('/create', teamController.create)