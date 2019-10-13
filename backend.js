const express = require('express');
const cors = require('cors');
var axios = require('axios');
const app= express();

app.use(cors());
// app.get('/gifs', async (req,res) =>{
    
//     let search = req.query.search
//     let apiRandomSearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=scQk18P2oMykircXwoLXgsvGbP0uCZtz&q=${search}`
//     let resp = await axios.get(apiRandomSearchUrl)
// res.json(resp.data)
// })


app.get('/gifs', async (req,res) =>{
        let search = req.query.search
        let apiRandomSearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=scQk18P2oMykircXwoLXgsvGbP0uCZtz&q=${search}`
        let resp = await axios.get(apiRandomSearchUrl)
        let arr = []
            for(let i=0;i< resp.data.data.length;i++){
                arr.push(resp.data.data[i].url)
                 }
    res.json(arr)

})




app.get('/images', async(req,res) =>{
    let search = req.query.search
    let apiRandomSearchUrl = `https://pixabay.com/api/?key=13922629-da0bb635de15506cfc4a4d3f3&q=${search}`
    let resp = await axios.get(apiRandomSearchUrl)
    let arr = [];
    for(let i=0; i<resp.data.hits.length ; i++){
    arr.push(resp.data.hits[i].webformatURL) 
}
res.status(200)
 res.set('Content-Type', 'application/json')
res.json(arr)
})

app.listen(4000, () =>{
console.log("Server running at port: 4000")
})