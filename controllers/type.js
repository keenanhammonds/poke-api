  
const Type = require('../models/Type')

module.exports = {
    show: (req, res) => Type.find({})
        .then(type => res.json(type)),

    showByName: (req, res) => Type.find({ name: req.params.name })
        .then(type => res.json(type)),

    showById: (req, res) => Type.findById({ _id: req.params.id })
        .then(type => res.json(type)),
}