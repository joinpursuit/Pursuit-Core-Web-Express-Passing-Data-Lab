const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();

port = 3000;

app.get("/", (req,res) => {
    req.url("")
})

app.get("/gifs", (req,res) => {
    let searchData = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=zEBw1uIfpkiMfgemGbJbOJ37adnHIo35&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`)
    res.json(searchData.data)
})

app.get("/images", (req,res) => {
    let searchData = await axios.get(``)
    res.json(searchData.data)
})

app.listen(port, () => {
    console.log("App is listening on port ", port)
})