const express = require("express")
const cors = require("cors")
const axios = require("axios")
const port = 3000
const app = express()
app.use(cors())

app.get("/gifs", async (req, res) => {
  let gifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=nGBdesYGe92z2bDC8fBGIc8BVhxOZCBh&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`)
  
  res.json({status: "success 200", gifs:gifs.data.data})
})
app.get("/images", async (req, res) => {
  let images = await axios.get(`https://pixabay.com/api/?key=14881729-f6bcb6a0e17a90d012bb901a1&q=${req.query.search }&image_type=photo`)

  res.json({status: "success 200", images:images.data.hits})
})


app.listen(port, () => {
  console.log("Yerrrr")
})