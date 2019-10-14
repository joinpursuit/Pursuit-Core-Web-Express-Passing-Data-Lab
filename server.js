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





app.get("/",(req,res)=>{
    // console.log('req.body',req.body);
    res.send(`Welcome server is running`)
})

app.get("/gif", (req,res)=>{

})




app.listen(port, ()=>{
    console.log("running at http://locolhost:3000");
})