const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();

port = 3000;

app.listen(port, () => {
    console.log("App is listening on port ", port)
})