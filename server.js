const express = require('express')
const axios = require('axios')
const cors = require('cors')

const port = 8080
const app = express()

app.use(cors())
app.get('/gif', async (req, res) => {


  const info = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=tV6UIRNf2HWzuLDkzZAsiRAq2i3ivUUV&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`)
    .catch(err => {
      console.log(err)
    }
    )

  let images = []
  for (let i = 0; i < info.data.data.length; i++) {
    images.push({ image: info.data.data[i].images.fixed_width.url })
  }
  let obj = {
    body: images
  }

  res.json(obj)
})

app.get('/images', async (req, res) => {
  const pix = await axios.get(`https://pixabay.com/api/?key=13922943-094572cce80cc90875a63b228&q=${req.query.search}`)
    .catch(err => {
      console.log(err)
    })


  let images = []
  for (let i = 0; i < pix.data.hits.length; i++) {
    images.push({ image: pix.data.hits[i].previewURL })
  }

  let obj = { body: images }
  res.json(obj)

})


app.listen(port, () => {

})

