const express = require('express');
const parser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(parser.json())


app.use("/", require("./routes/pokemon"));
app.use("/pokemon", require("./routes/pokemon"));
// app.use("/team", require("./routes/team"));

app.set("port", process.env.PORT || 8080)

app.listen(app.get('port'), () => {
    console.log(`up and running on port 8080`)
})