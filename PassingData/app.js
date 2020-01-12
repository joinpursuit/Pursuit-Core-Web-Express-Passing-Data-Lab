const express = require('express')
const app = express();
const axios =require('axios')
const bodyParser = require('body-parser')
const port = 3000;
const cors = require('cors')

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/gif/:search', async(request, response)=>{
    let urls = `https://api.giphy.com/v1/gifs/search?api_key=DqbAfGDrEbDCiyGtVnUjCl2PCJDqHXVD`;
    let load = request.params.search;
    let pic = await axios.get(urls+ "&q="+load + "&limit=1")
    let emptyObj = [];
   
    for(let i of pic.data.data) {
        emptyObj.push(i.images.original.url);
    }
    
    response.json(emptyObj)
    console.log(emptyObj)
   

})
app.get('/images/:search',async(request, response)=>{
    let urls = `https://pixabay.com/api/?key=13923830-df4661fc6f67f3ecc5b2d1c5b`;
    let load = request.params.search;
    let pic = await axios.get(urls+ "&q="+load + "&limit=1")
    let emptyObj = [];

    for(let i of pic.data.hits) {
        emptyObj.push(i.webformatURL)
        
    }
    
    response.json(emptyObj)
    console.log(emptyObj)


})


app.listen(port, ()=>{
    console.log(`server is at ${port}`)
})

