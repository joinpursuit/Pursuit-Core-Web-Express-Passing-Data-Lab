const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const keys = require('./config.js')

let giphyKey = keys.config.giphyKey;
let pixaBayKey = keys.config.pixaBayKey;

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

const loadDataFromGiphy = async (param) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${param}&limit=25&offset=0&rating=G&lang=en`

    const {
        data: {
            data
        }
    } = await axios.get(url)

    return data;
}

const loadDataFromPixabay = async (param) => {

    const url = `https://pixabay.com/api/?key=${pixaBayKey}&q=${param}&image_type=photo`

    const {
        data
    } = await axios.get(url)
    // console.log(data.hits);

    return data.hits;
}

app.get('/gif', async (req, res) => {
    let search = req.query.search;

    results = await loadDataFromGiphy(search);

    let dataMap = results.map(el => el.url);
    res.json(dataMap)
})

app.get('/images', async (req, res) => {
    let imgSearch = req.query.search;

    let imgData = await loadDataFromPixabay(imgSearch);
    // console.log(imgData);

    let imgMap = imgData.map(el => el.largeImageURL);
    res.json(imgMap)
})

app.listen(8000, () => {
    console.log('Running at http://localhost:3000/');
})