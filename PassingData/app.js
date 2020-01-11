const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

let info = [];

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get("/gifs", async(request,response)=>{
  try{
    let emptyGifArr =[]
    let api_key = `DqbAfGDrEbDCiyGtVnUjCl2PCJDqHXVD`
<<<<<<< HEAD
    let urlGif = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key= ${api_key} ${request.query.search}&limit=&offset=0&rating=PG&lang=en`);

=======
    let gifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key= ${api_key}&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`)
    let gifArr= gifs.data.data;
    gifArr.forEach(el=>{
      emptyGifArr.push(el.images)
    })
>>>>>>> 0431a838719ffb260d94a474e8eaeccf85124b15
    request.json({
      emptyGifArr,
      success:200,
      
    })

  }catch(err){
    response.json((err))
  }
})

app.get("/images", async(request,response)=>{
  try{
    let emptyImageArr = []
    let api_key = `14881762-213b8595c2d5d771b7010b29e`
<<<<<<< HEAD
    let urlImages = await axios.get(`https://pixabay.com/api/?key= ${api_key}&q=${request.query.search}`);
    
=======
    let url= await axios.get(`https://pixabay.com/api/?key=${api_key}&q=${req.query.search}&image_type=photo`);
    let imageArr = url.data.hits
    imageArr.forEach(el=>{
      emptyImageArr.push(el.webformatURL)
    })
>>>>>>> 0431a838719ffb260d94a474e8eaeccf85124b15
    request.json({
      success:200,
    })

  }catch(err){
    response.json((err))
  }
})

app.listen(port, () => {
  console.log("listening to port", port);
});