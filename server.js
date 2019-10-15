const express = require('express')
const app = express()
const port = 3000
const axios = require("axios")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}))


app.get("/gifs/:search",async(req,res)=>{
    const myUrl = "https://api.giphy.com/v1/gifs/search?api_key=ErjFs0jIUsvd3Xsb04mZ4DyrpW9l6A11"
    let obj = []
    
    let search_term = req.params.search;
    let response = await axios.get(myUrl + "&q=" + search_term + "&limit=25");
    
    
    for (let key of response.data.data) {
        // console.log(i.images.original.url)
        // gifObj[i.id] = i.images.original.url
        obj.push(key.images.original.url)
        }

    res.json(obj)
    console.log("this is data key",obj)
    // res.send(gifObj)

})

app.get("/images",(req,res)=>{
    // console.log('req.body',req.body);
    res.send(`Welcome server is running`)
})

app.get("/images/:search", async(req,res)=>{
    let searchTerm = req.params.search
    const myUrl = `https://pixabay.com/api/?key=13922911-5ee2f9370dda27274bac312c6&q=${searchTerm}&per_page=25`;
    let data = []
    
    let response  = await axios.get(myUrl);

    for(let key of response.data.hits) {
        data.push(key.webformatURL)
    }

    console.log(data)
    // console.log(axiosResponse.data)
    res.json(data)

})








app.listen(port, ()=>{
    console.log("running at http://localhost:3000");
})