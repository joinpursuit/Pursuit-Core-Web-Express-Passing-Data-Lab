const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();
let container = [];

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/gif", (req, res) => {
    console.log(req.body);
    container.push(req.body);
    res.json({gif: req.body});
})

app.post("/image", (req, res) => {

})

app.listen(port, () => {
    console.log("Listening on port ", port);
})