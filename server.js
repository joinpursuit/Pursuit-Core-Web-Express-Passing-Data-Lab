const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let pixyKey = "14881651-1e1228a1f06e5912049e890d8";
let gifKey = "eZzQ4D3kLuqDmPlQUgDqmlD9dGc4JZl1";

app.get("/gifs", async (req, res) => {
    try{
        let gifImage = [];
        let gifsRes = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${req.query.q}&limit=25&offset=0&rating=G&lang=en`);
        
        gifArr = gifsRes.data.data;
        gifArr.forEach(gif => {
            gifImage.push(gif.images.downsized_large.url)
        })

    } catch (err){
        console.log(err)
    }
    console.log(req.query);
    res.json(req.query);
})

app.get("/images", async (req, res) => {
    try {
        let pixImage = [];
        let response = await axios.get(`https://pixabay.com/api/?key=${pixyKey}&q=${req.query.q}`);
        let pixArr = response.data.hits;

        pixArr.forEach(pic => {
            pixImage.push(pic.largeImageURL)     
        });
        res.json(pixImage);
    } catch (err) {
        console.log(err)
    }
})

app.listen(port, () => {
    console.log("Listening to port", port);
})