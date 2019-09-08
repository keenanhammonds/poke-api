const mongoose = require('../db/connection');


const TeamSchema = new mongoose.Schema({
    first:  {
        type:  mongoose.Schema.Types.name,
        ref: 'Pokemon'
    },
    second:  {
        type:  mongoose.Schema.Types.name,
        ref: 'Pokemon'
    },
    third: {
        type:  mongoose.Schema.Types.name,
        ref: 'Pokemon'
    }
})

module.exports = mongoose.model("Team", TeamSchema)