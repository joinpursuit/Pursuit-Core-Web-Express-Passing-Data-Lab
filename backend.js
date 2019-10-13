const express = require('express');
const cors = require('cors');
var axios = require('axios');
const app= express();

app.use(cors());

app.get('/gifs', (req,res) =>{
    async function apiGif() {
        let search = req.query.search
         let limit = 30;
        let apiRandomSearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=scQk18P2oMykircXwoLXgsvGbP0uCZtz&q=${search}&limit=${limit}&offset=0&rating=G&lang=en`
        let resp = await axios.get(apiRandomSearchUrl)

            for(let i=0;i< 30;i++){
                console.log(resp.data.data[i].url)
                 }

    }

    res.json(apiGif())

})

app.get('/images', (req,res) =>{
    async function apiImage() {
        let search = req.query.search
        let apiRandomSearchUrl = `https://pixabay.com/api/?key=13922629-da0bb635de15506cfc4a4d3f3&q=${search}`
        let resp = await axios.get(apiRandomSearchUrl)

    }



})


// app.post()
app.listen(4000, () =>{
    console.log("Server running at port: 4000")
})