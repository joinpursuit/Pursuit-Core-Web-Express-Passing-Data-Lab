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
    let gifUrls = {};
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Banyh3vMsBByJUF45452K3RXj8rwSGBY&q=${search}&limit=25&offset=0&rating=G&lang=en`)
    .then(function (response) {
        for (let i of response.data.data) {
            // console.log(i.images.original.url)
            gifUrls[i.id] = i.images.original.url;
        }
        res.json(gifUrls);
    })
})

app.get("/images", (req, res) => {
    let search = req.query.search;
    let gifUrls = {};
    axios.get(`https://pixabay.com/api/?key=13922615-0f271283db4db17fa1800b9e8&q=${search}`)
    .then(function (response) {
        for (let i of response.hits) {
            gifUrls[i.id] = i.webformatURL;
        }
        res.json(gifUrls);
    })

})

app.listen(port, () => {
    console.log(`Server is running from port ${port}`)
})