const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Pic/Gif Searcher!");
})

app.get('/gifs', async (req, res) => {

    res.status(200);

    let printedGifs = [];
    const query = req.query;
    let searchedImages = await makeGifArray(query);
    console.log(query)

    for(let i = 0; i < searchedImages.data.length; i++) {
        printedGifs.push(searchedImages.data[i].images.fixed_width.url)
    }
    // res.json(searchedImages);
    res.json(printedGifs);
    // res.send(query);

})

app.get('/images', async (req, res) => {

    res.status(200);

    let printedPic = [];
    const query = req.query;
    let searchedImages = await makeImageArray(query);
    console.log(query)

    for(let i = 0; i < searchedImages.hits.length; i++) {
        printedPic.push(searchedImages.hits[i].largeImageURL)
    }
    // res.json(searchedImages);
    res.json(printedPic);
    // res.send(query);
})

app.use("*", (req,res) => {
    res.status(404);
    res.send('This was not found =[ 404')
})

app.listen(1337, () => {
    console.log("Running at http://localhost:1337/")
})

async function makeImageArray (query) {
    const myURL = `https://pixabay.com/api/?key=13922718-26a724f680e1f800fd942b2fa&q=${query.search}&image_type=photo`
    const resp = await axios.get(myURL) 
    // console.log("resp", resp.data)
    return resp.data;
}

async function makeGifArray (query) {
    const myURL = `https://api.giphy.com/v1/gifs/search?api_key=VeFePJ4kLDnXblmrfUBPNCu23R10GO9m&q=${query.search}&limit=25&offset=0&rating=G&lang=en`
    const resp = await axios.get(myURL) 
    // console.log("resp", resp.data)
    return resp.data;
}