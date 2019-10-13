const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

const gifApiKey = 'Eyf3Ufvq8aC1qsaGnL1lP6mei8bQukAF'
const gifURL = `http://api.giphy.com/v1/gifs/search?api_key=${gifApiKey}&q=`

app.get('/gif/', async (req, res) => {
    console.log(`You've hit GIF endpoint ${gifURL + req.query.search}`)
    let {data} = await fetch(gifURL + req.query.search).then(r => r.json())
    let gifLinks = data.map(data => data.images.original.url);
    res.json(gifLinks);
})

const imageApiKey = '13922668-1d4f9a71bf70a0ac715dd1fb0'
const imageURL = `https://pixabay.com/api/?key=${imageApiKey}&q=`

app.get('/images/', async (req, res) => {
    console.log(`You've hit IMAGE endpoint ${imageURL + req.query.search}`)
    let {hits} = await fetch(imageURL + req.query.search).then(r => r.json())
    let imageLinks = hits.map(hit => hit.largeImageURL)
    res.json(imageLinks);
})

app.listen(3000, () => console.log('Running the giphy pixabay=============='))