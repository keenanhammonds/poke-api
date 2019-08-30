const mongoose = require('mongoose');


const PokemonSchema = new mongoose.Schema({
    name: String,
    sprites: [String],
    moves: [String]

})


module.exports = mongoose.model("Pokemon", PokemonSchema)