const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;


app.get("/", (req, res) => {
    res.send("Welcome to the homepage");
})

const pixUrl = `https://pixabay.com/api/?key=13923868-770bc3d0abd7c0cf84031b3c3&q=javascript&image_type=photo`;

let arrayOfPix = [];

app.use(bodyParser.urlencoded({
    extended:false
}))

app.get("/images", (req, res) => {
    console.log("req.query", req.query);
    res.json(arrayOfPix);
})

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}/`);
})