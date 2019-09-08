const mongoose = require('../db/connection');


const PokemonSchema = new mongoose.Schema({
    name: String,
    moves: [String],
    types: [String]
})


module.exports = mongoose.model("Pokemon", PokemonSchema)