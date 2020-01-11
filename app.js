const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/gifs", async (req, res) => {
    let gifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=nofgPE7bpvmhOJX8gYW454Tc38ZbMDzO&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`);
    res.json(gifs.data.images);
})

app.get("/images", async (req, res) => {
    let images = await axios.get(`https://pixabay.com/api/?key=14882080-d62f50340b7ab86bd198c7292&q=${req.query.search}&image_type=photo`);
    res.json(images.data);
})

app.listen(port, () => {
    console.log("Listening to port", port);
})