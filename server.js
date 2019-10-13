const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())

const port = 5050

app.get('/gif/', (req, res) => {

  const query = req.query
  let url = 'https://api.giphy.com/v1/gifs/search?api_key=mY5Fnpy0vGdtm5pYzPGmPjRoUINszJlv&q=' + query.search + '&limit=25&offset=0&rating=G&lang=en'
  axios.get(url)
  .then(response => {
    let gifs = []
    response.data.data.forEach(a => {
      gifs.push(a.images.downsized.url)
    })
    res.send(gifs)
  })
})

app.get('/images/', (req, res) => {
  const query = req.query
  let url = 'https://pixabay.com/api/?key=13928364-e335e602220fa4851e53ccfdd&q=' + query.search
  axios.get(url)
  .then(response => {
    let imgs = []
    response.data.hits.forEach(a => {
      imgs.push(a.webformatURL)
    })
    res.send(imgs)
  })
})

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`)
})
