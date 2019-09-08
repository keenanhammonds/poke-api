const mongoose = require('mongoose')
// what is the connection.js file for exactly
let mongoURI ='';

if(process.env.NODE_ENV === 'production') mongoURI = process.env.DB_URL
else mongoURI = `mongodb://localhost/poke-api`

mongoose.connect(mongoURI, {useNewUrlParser: true})
module.exports = mongoose