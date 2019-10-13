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


server.get('/Images/:url', async (request, response) => {
    let imageBaseURL = 'https://pixabay.com/api/?key=13922830-8b5290583ec323b6b8ffeb4d6';
    let resp = await axios.get(`${imageBaseURL}${request.params.url}`)
    response.send(resp.data)
})

server.get('/GIF/:url', async (request, response) => {
    let gifBaseURL = 'https://api.giphy.com/v1/gifs/search?api_key=0BYfvFIo0M8HDE1GGPUeNkWwl9Uu1NPz';
    let resp = await axios.get(`${gifBaseURL}${request.params.url}`)
    response.send(resp.data)
})

server.get('/Stickers/:url', async (request, response) => {
    let stickersBaseURL = 'https://api.giphy.com/v1/stickers/search?api_key=0BYfvFIo0M8HDE1GGPUeNkWwl9Uu1NPz';
    let resp = await axios.get(`${stickersBaseURL}${request.params.url}`)
    response.send(resp.data)
})

