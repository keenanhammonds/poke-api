const express = require('express');
const router = express.Router()
const teamController = require('./controllers/teamController')

router.get('/team', teamController.show)
router.get('/pokemon/:pokemon', teamController.showByPokemon)
router.get('/name/:name', teamController.showByName)
router.get('/team/id/:id', teamController.showById)
router.delete('/team/delete/id/:id', teamController.deleteById)
router.delete('/team/delete/name/:name', teamController.deleteByName)
router.put('/team/edit/id/:id', teamController.editById)
router.put('/team/edit/name/:name', teamController.editByName)
router.post('/team/create', teamController.create) 