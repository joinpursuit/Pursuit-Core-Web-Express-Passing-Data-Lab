const express = require("express");

const axios = require('axios')

const app = express();

const cors = require("cors")

app.use(cors())

app.get("/gifs", async (req, res) => {
    let querySearch = req.query
    console.log("1", querySearch)
    console.log("2", querySearch.search)


    let url = `https://api.giphy.com/v1/gifs/search?api_key=qQ2bsFMuvVGd36lx3RvOnBg96Gmz6XvJ&q=${querySearch.search}&limit=10`
    let response = await axios.get(url)
    res.send(response.data)
    // res.send('ok')

})



app.get("/images", async(req, res) => {
    console.log(req.url)
    console.log(req.query)
     let imageSearch = req.query.lookup
    let url = `https://pixabay.com/api/?key=13922637-0774b668a0fddb2607d13a71a&q=${imageSearch}&image_type=photo`
    let response = await axios.get(url) 
    res.json(response.data)

})


app.listen(3012, () => {
    console.log("Running at http://localhost:3012/")
})