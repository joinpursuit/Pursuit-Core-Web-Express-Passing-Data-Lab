const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser');

const fetch = require("node-fetch");

const port = 3000;

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.get("/gif", (req, res) => {
  let search = req.query.search

const displayData = (data) => {
  let dataArr = data.data 
  let urlArr = dataArr.map(el => {return el.images.original.url});
  res.send(urlArr)
}

  let url = `https://api.giphy.com/v1/gifs/search?api_key=gx5GqtGjPVFlEXrWgwDQ6Fa3xRT9FyLi&q=${search}`

  fetch(url)
  .then(response => response.json())
  .then(data => displayData(data))
  .catch(error => console.log(error));   
})


app.get("/image", (req, res) => {
    let search = req.query.search

    const displayData = (data) => {
      let dataArr = data.hits 
      let urlArr = dataArr.map(el => {return el.webformatURL});
      res.send(urlArr)
    }
    
      let url = `https://pixabay.com/api/?key=13922695-55fee6af1c40c2c9816a0fd74&q=${search}`
    
      fetch(url)
      .then(response => response.json())
      .then(data => displayData(data))
      .catch(error => console.log(error));

})

app.listen(port)
