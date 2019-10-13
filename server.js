const express = require('express')
const axios = require('axios')

const app = express()

app.get('/', (req, res) => {
    console.log('req params', req.params)
    res.send('This is the home page')
})
app.get('/gif', (req, res) => {
    const query = req.query
    const search = req.query.search
    const limit = req.query.limit

    res.send(query)
    console.log(query.search, query.limit)

    let url = `https://api.giphy.com/v1/gifs/search?api_key=zgypTLAV6uuspO4M0uJeiylI4YvjtMFP&q=${search}&limit=${limit}&offset=0&rating=G&lang=en`

    let fetchGifs = fetchGiphy(url)
    console.log(fetchGifs)   
})


app.listen(4000, () => {
    console.log('This server is running at localhost:4000/')
})

const fetchGiphy = (url) => {
    let axiosCall = axios.get(url)
    .then((response) => {
        let data = response.data.data
        for (i = 0; i < data.length; i++) {
            console.log(data[i].url)
        }  
    })
    .catch((err) => {
        console.log('Error', err)
    })
}
 
