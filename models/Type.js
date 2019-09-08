const mongoose = require('../db/connection');

const TypeSchema = new mongoose.Schema({
    name: String,
})

module.exports = mongoose.model("Types", TypeSchema)