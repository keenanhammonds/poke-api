const Pokemon = require('../models/Pokemon')

module.exports = {
    show: (req, res) => Pokemon.find({})
        .then(pokemon => res.json(pokemon)),

    showByName: (req, res) => Pokemon.find({ name: req.params.name })
        .then(pokemon => res.json(pokemon)),

    showById: (req, res) => Pokemon.findById({ _id: req.params.id })
        .then(pokemon => res.json(pokemon)),

    showByTag: (req, res) => Pokemon.find({ tags: { $in: req.params.tags } })
        .then(pokemon => res.json(pokemon))
}