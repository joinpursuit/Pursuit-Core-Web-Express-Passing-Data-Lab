const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

app.use(cors());


app.use(bodyParser.urlencoded({
    extended:false
}))

app.get("/gifs", (req, res) => {
    let search = req.query.search;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Banyh3vMsBByJUF45452K3RXj8rwSGBY&q=${search}&limit=25&offset=0&rating=G&lang=en`)
    .then(function (response) {
        // console.log(response.data)

        for (let i of response.data.data) {
            console.log(i.url)
        }
    })
    
    
    res.send(`the gifs are going. You searched ${search}`);
})

app.get("/images", (req, res) => {
    res.send(`the images are going`)
})

app.listen(port, () => {
    console.log(`Server is running from port ${port}`)
})