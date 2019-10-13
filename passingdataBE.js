const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const axios = require("axios");
const apiMod = require("./apiKeys.js");
const bodyParse = require("body-parser");

app.use(cors());
app.use(bodyParse.urlencoded({extended:false}))
app.listen(port);
app.get("/image/", async (req, res) => {
    let input = req.query.search;
    let url = `https://pixabay.com/api?key=${apiMod.pixabay}&q=${input}`;
    let link = await axios.get(url).then((response) => {return response.data.hits[0].largeImageURL});
    res.send(link)
})
app.get("/gif/", async (req, res) => {
    let searchQ = req.query.search;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiMod.giphy}&q=${searchQ}`
    let link = await axios.get(url).then((response) => {return response.data.data})
    let imgArr = link.map((obj) => {return obj.images.original.url})    
    res.send(imgArr)
})
