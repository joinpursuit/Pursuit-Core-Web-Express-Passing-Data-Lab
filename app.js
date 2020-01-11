const express = require("express");
const cors = require("cors");
const axios = require("axios")
const bodyParser = require("body-parser")

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


app.get("/gif", async (req, res) => {
    const query = req.query
    try{
        
        let response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=O84iEhavxYTvHSvGKKocYL6hUWdAWMZr&q=${query["search"]}&limit=25&offset=0&rating=G&lang=en`)

        let gifs = response.data.data
        let gifreturn = []
    
        gifs.forEach( gif => {
            gifreturn.push(gif["images"]["downsized_large"]["url"])
        })
        res.send(gifreturn)
    } catch(err){
        console.log(err)
    }
})

app.get("/images", async (req, res) => {
    const query = req.query
    try {
        let response = await axios.get(`https://pixabay.com/api/?key=14882738-3fafdb10f4324d135fd67b077&q=${query["search"]}&image_type=photo`)

        imgData = response.data.hits
        imgReturn = []

        imgData.forEach(img => {
            imgReturn.push(img["webformatURL"])
        })
        imgReturn = imgReturn.slice(0, 24)

        res.send(imgReturn)
    }catch(err) {
        console.log(err)
    }
})




app.listen(port, () => {
    console.log("Listening to port ", port)
})
