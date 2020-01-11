const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const axios = require("axios")

const port = 3000

const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/gif", async (req, res) => {
    let gifArr = []
    try {
        let gifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=jEawtlGCmvF2hqdMR4dG5JCteM9SibcI&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`) 
        console.log(gifs.data.data[0].images.downsized_large.url)
        gifs.data.data.forEach((gif) => {
            gifArr.push(gif.images.downsized_large.url)
        })
        res.json(gifArr)
    }catch (error) {
    
}
})

app.get("/images", async (req, res) => {
    let imageArr = []
    try {
        let images = await axios.get(`https://pixabay.com/api/?key=14882075-baeaa3ace3ad3915c9cb9e804&q=${req.query.search}&image_type=photo`)
    } catch (error) {
        
    }
}

app.listen(port, () => {
    console.log("Listening to port ", port)
})