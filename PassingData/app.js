const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

let info = [];

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("listening to port", port);
});


