const express = require('express');
const body = require('body-parser');
const fetch = require("node-fetch");
const cors = require('cors');

const api = require('./api/keys.js');
const app = express();

app.use(body.urlencoded({extended: false}));
app.use(cors());


app.get('/gifs', async (req, res) => {
    const userInput = req.query.search;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${api.giphy}&q=${userInput}`;
    let result = await fetch(url).then(x => x.json());
    console.log(result)
    res.send(result);
})

app.get('/images', async (req, res) => {
    const userInput = req.query.search;
    let url = `https://pixabay.com/api/?key=${api.pixabay}&q=${userInput}&`;
    let result = await fetch(url).then(x => x.json());
    console.log(result)
    res.send(result);
})

const port = 5000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
    // console.log(api);
})