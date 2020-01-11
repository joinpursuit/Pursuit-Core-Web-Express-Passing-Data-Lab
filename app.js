const express = require("express")
const cors = require("cors")
const port = 1000
const app = express()
const bodyParser = require("body-parser")
const axios = require("axios")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/gif", async (req, res) => {
  try {
    let data = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=ezN8zgFUOSPkQ4yKuX9yRZ31dct9COw5&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`
    )
    res.json({ success: 200, gifs: data.data })
  } catch (err) {
    console.log(err)
  }
})

app.get("/images", async (req, res) => {
  try {
    let data2 = await axios.get(
      `https://pixabay.com/api/?key=14881942-6bfe1dd6b6f5dceb3d70f03cb&q=${req.query.search}&image_type=photo`
    )
    res.json({ success: 200, images: data2.data })
  } catch (err) {
    console.log(err)
  }
})

app.listen(port, () => {
  console.log("listening to port", port)
})
