const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Pic/Gif Searcher!");
})

// const makeImageArray = () => {
//     const allImages = {
        
//     }
// }

app.get('/gifs', async (req, res) => {

    res.status(200);

    let printedGifs = [];
    let searchedImages = await makeGifArray();
    const query = req.query;

    for(let i = 0; i < searchedImages.data.length; i++) {
        printedGifs.push(searchedImages.data[i].images.fixed_width.url)
    }
    // res.json(searchedImages);
    res.json(printedGifs);
    // res.send(query);

})

// app.get('/images', (req, res) => {

//     let printedImages = [];

//     for(let i = 0; i < printedImages.data.length; i++) {
//         printedImages.push(pulledGifs.data[i].images.fixed_height_still.url);
//     }
//     res.json(printedImages);
// })

app.use("*", (req,res) => {
    res.status(404);
    res.send('This was not found =[ 404')
})

app.listen(1337, () => {
    console.log("Running at http://localhost:1337/")
})

async function makeGifArray () {
    const myURL = `https://api.giphy.com/v1/gifs/search?api_key=VeFePJ4kLDnXblmrfUBPNCu23R10GO9m&q=dungeons%20and%20dragons&limit=100&offset=0&rating=G&lang=en`
    const resp = await axios.get(myURL) 
    // console.log("resp", resp.data)
    return resp.data;
}