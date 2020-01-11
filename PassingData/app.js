const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

let info = [];

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get("/gif", async(request,response)=>{
  try{
    let api_key = `DqbAfGDrEbDCiyGtVnUjCl2PCJDqHXVD`
    let gifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key= ${api_key} ${request.query.search}&limit=&offset=0&rating=PG&lang=en`)

    request.json({
      success:200,
      
    })

  }catch(err){
    console.log(err)
  }
})

app.get("/images", async(request,response)=>{
  try{
    let api_key = `14881762-213b8595c2d5d771b7010b29e`
    let url= await axios.get(`https://pixabay.com/api/?key= ${api_key} ${request.query.search}`);
    request.json({
      success:200,
    })

  }catch(err){
    console.log(err)
  }
})

app.listen(port, () => {
  console.log("listening to port", port);
});