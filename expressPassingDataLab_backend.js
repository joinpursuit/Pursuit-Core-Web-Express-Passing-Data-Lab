const express = require('express');
const axios = require ('axios');
const cors = require('cors');
const app = express();


app.use(cors());

app.get('/images', (req,res)=>{
    const search = req.query.search
    
    const imgAPI = `https://pixabay.com/api/?key=13922722-10eabd9bcf103ffa8850eae69&q=${search}`;
    

    axios
    .get(imgAPI)
    .then((response)=>{
        let result = response.data
        let arr = result.hits

        let imgsArr = [];
        for(let i of arr){
            imgsArr.push(i.webformatURL)
        }
        res.send(imgsArr)
    })
    .catch((error)=>{
        console.log('error')
    })

})

app.get('/gif', (req,res)=>{
    const search = req.query.search
    const gifAPI = `https://api.giphy.com/v1/gifs/search?api_key=oPeDxNh6j8L19KlXicskRFXA3txlJWtS&q=${search}`;

    
    axios
    .get(gifAPI)
    .then((response)=>{
        let result = response.data.data;

        let gifArr = [];
        for(let i of result){
            gifArr.push(i.images.original.url)
        }
        res.send(gifArr)
    })
    .catch((error)=>{
        console.log('error')
    })

})

app.listen(4444, ()=>{
    console.log('Running on port 4444')
})