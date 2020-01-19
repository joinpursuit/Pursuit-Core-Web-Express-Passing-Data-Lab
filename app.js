const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const axios = require("axios")


const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({
    extended:false
}))


const port = 3000

app.get("/gif/:search", async (req,res)=>{
const query = req.query
let url = "https://api.giphy.com/v1/gifs/search?api_key=umsYRExnwFVENabBKE1HMck5dcTk2aIt&q=&limit=25&offset=0&rating=G&lang=en"
let gifData = axios.get(url)
    let gifs = []
    response.data.data.forEach(e => {
   
  
})







app.listen(port, ()=>{
    console.log(`App is running at http://localhost:${port}`)
})