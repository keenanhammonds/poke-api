const mongoose = require('mongoose')

let mongoURI ='';

if(process.env === 'production') mongoURI = process.env.DB_URL
else mongoURI = (mongoURI, {useNewUrlParser: true})
module.exports = mongoose