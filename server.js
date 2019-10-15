const express = require('express');
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors());


app.get('/gif', async (request, response) => {
    let gifs = [];
    const myUrl = `https://api.giphy.com/v1/gifs/search?api_key=3NEHDnAg6sEjOhOQKHu1waWs7zoDLqye&q=${request.query.search}&limit=&offset=0&rating=PG&lang=en`

    let gif = await axios.get(myUrl);

    for (let i of gif.data.data) {
        gifs.push(i.images.original.url);
    }
    response.json(gifs)
})


app.get('/images', async (request, response) => {
    let images = [];
    const myUrl = `https://pixabay.com/api/?key=13922809-0f85c436e7d683d7c8cb1672b&q=${request.query.search}`

    let image = await axios.get(myUrl);

    for(let i of image.data.hits){
        images.push(i.webformatURL);
    }
    response.json(images);

}) 

app.listen(1001, () => {
    console.log(`running at http://localhost:1001`)
})
