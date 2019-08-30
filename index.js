const express = require('express');
const parser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(parser.json())

app.set("port", process.env.PORT || 8080)

app.listen(app.get('port'), () => {
    console.log(`up and running on port 8080`)
})