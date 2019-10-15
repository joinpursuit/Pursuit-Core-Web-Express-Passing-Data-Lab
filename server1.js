const express = require("express");
const bodyParser = require("body-parser");
const axios = require ("axios");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3001;


app.get("/", (req, res) => {
    res.send("Welcome to the homepage");
})


app.use(bodyParser.urlencoded({
    extended:false
}))

app.get("/gif", async (req, res) => {
    console.log("req.query", req.query);

    let fetch = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=KK36PaHaQT0zhXwMvRXT4VmzdXj9y3kF&q=${req.query.search}&limit=5&offset=&rating=G&lang=en`);
    res.send(fetch.data);
})

app.get("/images", async (req, res) => {
    console.log("req.query", req.query);

    let fetch = await axios.get(`https://pixabay.com/api/?key=13923868-770bc3d0abd7c0cf84031b3c3&q=${req.query.search}`);
    res.send(fetch.data);
})

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}/`);
})
