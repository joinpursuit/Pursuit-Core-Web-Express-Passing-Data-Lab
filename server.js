const express = require('express')
const axios = require('axios')
const cors = require ('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    console.log('req params', req.params)
    res.send('This is the home page')
})

app.get('/gif', async (req, res) => {
    const { query } = req
    const { limit, search } = query

    let url = `https://api.giphy.com/v1/gifs/search?api_key=zgypTLAV6uuspO4M0uJeiylI4YvjtMFP&q=${search}&limit=${limit}&offset=0&rating=G&lang=en`
    let fetchGifs = await fetchGiphy(url)
    
    console.log(fetchGifs)
    res.send(fetchGifs)   
})

app.get('/image', async (req, res) => {
    const { query } = req
    const { search } = query

    let url = `https://pixabay.com/api?key=13922628-69336ca8f5d13eddc5f1cefc7&q=${search}&image_type=photo`
    let getImage = await fetchImage(url)

    console.log(getImage)
    res.send(getImage)  
})

app.listen(4000, () => {
    console.log('This server is running at localhost:4000/')
})

const fetchGiphy = async (url) => {
    const retrievedData = await axios.get(url) // ===> res, data
    const { data } = retrievedData.data
    
    const urlArray = data.map(obj => obj.url)
    return urlArray
}
 
const fetchImage = async (url) => {
    const retrievedDataImg = await axios.get(url)
    const data  = retrievedDataImg.data.hits
    
    const imgArray = data.map(obj => obj.imageURL)
    return imgArray
}
