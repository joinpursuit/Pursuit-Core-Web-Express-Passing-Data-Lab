const express = require("express")
const cors = require("cors")
const axios = require("axios")
const port = 4000
const app = express()

const apiKeyGiphy = "Sl5akwqddrCF5a8GV1qYibidzbBu620K"
const apiKeyPixabay = "15034545-620e25b8851f4b8527c7fd565"

app.use(cors())

app.get("/gifs", async (req, res) => {
    let gifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKeyGiphy}&q=${req.query.search}&limit=25&offset=0`)
    //console.log(req.query.search)
    res.json({status: "success 200", gifs:gifs.data.data})
})

app.get("/images", async (req, res) => {
    let images = await axios.get(`https://pixabay.com/api/?key=${apiKeyPixabay}&q=${req.query.search}&image_type=photo`)
    console.log(req.query)
    res.json({status: "success 200", images:images.data.hits})
})


app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})
