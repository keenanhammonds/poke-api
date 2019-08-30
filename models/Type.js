const mongoose = require('mongoose');

const TypeSchema = new mongoose.Model({
    name: String,
    sprites: [String],
    moves: [String]
})

module.exports = mongoose.models("Types", TypeSchema)