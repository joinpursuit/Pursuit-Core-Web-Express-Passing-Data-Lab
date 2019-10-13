const axios = require('axios');
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const port = 3000;
let server = express();

server.use(cors());
// server.use(bodyParser.urlencoded({
//     extended: false
// }))

server.listen(port, () => {
    console.log("listening on port :", port);
})


server.get('/Images', async (request, response) => {
    let baseURL = 'https://pixabay.com/api/?key=13922830-8b5290583ec323b6b8ffeb4d6';
    let req = request.query;
    req.q = req.q.replace(' ', '+')

    let url = `${baseURL}&q=${req.q}&per_page=${req.per_page}&image_type=${req.image_type}`
    if (req.category) {
        url += `&category=${req.category}`
    }
    let resp = await axios.get(url)
    response.send(resp.data)
})

server.get('/:gifOrStickers', async (request, response) => {
    let baseURL;
    if (request.params.gifOrStickers === "GIF") {
        baseURL = 'https://api.giphy.com/v1/gifs/search?api_key=TgEkE4985juUhP4WwNg6oc2dh3jObE68';
    } else if (request.params.gifOrStickers === "Stickers") {
        baseURL = 'https://api.giphy.com/v1/stickers/search?api_key=TgEkE4985juUhP4WwNg6oc2dh3jObE68';
    }

    let req = request.query;
    let url = `${baseURL}&q=${req.q}&limit=${req.limit}`
    if (req.rating) {
        url += `&rating=${req.rating}`
    }
    if (baseURL) {
        let resp = await axios.get(url)
        response.send(resp.data)
    } else {
        response.send("Wrong URL")
    }
})