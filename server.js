const express = require('express')
const app = express();
const axios =require('axios')
const bodyParser = require('body-parser')
const port = 5004;
const cors = require('cors')

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use((req, res, next) => {
    let currDate = new Date()
    console.log(req.method, req.url, req.body, currDate.toLocaleString())
    next();
  })
app.get('/gifs/:search', async(request, response)=>{
    let urls = `https://api.giphy.com/v1/gifs/search?api_key=DqbAfGDrEbDCiyGtVnUjCl2PCJDqHXVD`;
    let load = request.params.search;
    let pic = await axios.get(urls+ "&q="+load + "&limit=1")
    let emptyObj = [];
    // .then(function(response){  
    for(let i of pic.data.data) {
        emptyObj.push(i.images.original.url);
    }
    
    response.json(emptyObj)
    console.log(emptyObj)
    // response.send(response.data)

})
app.get('/images/:search',async(request, response)=>{
    let urls = `https://pixabay.com/api/?key=13923830-df4661fc6f67f3ecc5b2d1c5b`;
    let load = request.params.search;
    let pic = await axios.get(urls+ "&q="+load + "&limit=1")
    let emptyObj = [];
    // .then(function(response){  
    for(let i of pic.data.hits) {
        emptyObj[i.id] = i.webformatURL;
    }
    
    response.json(data)
    console.log(data)
    // response.send(response.data)

})


// app.get("/", (request,response)=>{
//     response.send('is running')
// })
// app.get("/gif", (request, response)=>{

// })

app.listen(port, ()=>{
    console.log(`server is at ${port}`)
})

// const imageArray = ()=>{
//     const images =[];
//     for(let i=0; i<=100; i++){
//         const image ={
//             jpeg:"",
//             gif: ""

//         }
//         if(i%2){
//             image.jpeg ="still image"
//         } else {
//             image.gif = "gif image"
//         }
//         images.push(image)
//     }
//     return images;
// }

// app.post('/load', (request, response)=>{
// console.log(request);
// response.send('load')
// })
