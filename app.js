const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios")
const port = 3002;
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/gifs", async (req,res)=>{
    try{
    let responce = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Kv4DDMUg9mtiFDMdC2g5eqMqhMX0ciGE&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`);
    let giphyArr = responce.data.data;
    let urlArr = []
    giphyArr.forEach(result =>{
        urlArr.push(result.url)
    })
    res.json(urlArr)
    }catch(err){
        res.json(err)

    }
})

app.get("/images", async(req, res) =>{
    try{
        let imgSearch = await axios.get(`https://pixabay.com/api/?key=14852606-9242637cfeb028c0d3ae88b5a&q=${req.query.search}&image_type=photo`);
        let imgArr = imgSearch.data.hits;
        let searchImg = [];
        imgArr.forEach(result =>{
            searchImg.push(result.webformatURL)
        })
        res.json(searchImg);
        console.log(searchImg);

    }catch(err){
        res.json(err)
    }
})
app.listen(port,() =>{
    console.log("Listen to port " + port)
})