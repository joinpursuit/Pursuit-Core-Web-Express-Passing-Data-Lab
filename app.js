const express = require("express");
const cors = require("cors");
const axios = require("axios")
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/gifSearch", async(req, res) => {
    // let key = "CAdm5WTGPw6Ae8Ouq0wPiKRZrUtZALNo"
    // console.log(req.params)
    try {
        let response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=CAdm5WTGPw6Ae8Ouq0wPiKRZrUtZALNo&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`);
        let gifs = response.data.data
        let url =  []
        gifs.forEach(gif => {
            url.push(gif.images.downsized_large.url)
        })
        res.json(url)
    } catch(err) {
        console.log(err)
    }

    // console.log()
})

app.get("/imageSearch", async(req, res) => {
    // let key = "CAdm5WTGPw6Ae8Ouq0wPiKRZrUtZALNo"
    // console.log(req.params)
    try {
        let response = await axios.get(`https://pixabay.com/api/?key=14881666-5f15b36bd1109adc1a6d39da3&q=${req.query}&image_type=photo`);
        let images = response.data.hits
        console.log(images)
        let url =  []
        images.forEach(image => {
            url.push(image.webformatURL)
        })
        res.json(url)
    } catch(err) {
        console.log(err)
    }

})



app.listen(port, ()=> {
    console.log("you are on port ", port)
})