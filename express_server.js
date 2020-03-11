const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios').default;
const cors = require('cors')

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded ({
    extended: false
}))

app.get('/gif', (req, res) =>{
    let searchInput = req.query;
    let baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=Xq1odOGgRiAZNnqu8ukgwsexzCqnTqyM&q=${searchInput}&limit=25&offset=0&rating=G&lang=en`
    
    const getGif = async ()=> {
        try {
          const result = await axios.get(baseUrl);
          const gifs = {};
          for (let gif in result.data.data){
            gifs.url = gif.images.original.url
          }
          console.log(`GET:images`, gifs);
          // return gifs;

        } catch (err) {
          console.log('There is an error');
        }
      }
})
   getGif()


app.listen(4000, () => {
    console.log('Running at http://localhost:4000')
})