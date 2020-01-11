const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const axios = require("axios")
const app = express();

app.use(cors())

port = 3000;

app.get("/", (req,res) => {
    req.url("")
})

app.get("/gifs", async (req,res) => {
    let searchData = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=zEBw1uIfpkiMfgemGbJbOJ37adnHIo35&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`)
    res.json({status: "success 200", gifs: searchData.data.data})
})

app.get("/images", async (req,res) => {
    let searchData = await axios.get(`https://pixabay.com/api/?key=14882366-67a63d7f3cdfddf3f996ae9ba&q=${req.query.search}&image_type=photo`)
    res.json({status: "success 200", gifs: searchData.data})
})

app.listen(port, () => {
    console.log("App is listening on port ", port)
})