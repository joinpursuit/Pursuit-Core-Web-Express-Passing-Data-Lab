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
let emptyObj = {};

app.get('/gif/:search', (request, response)=>{
    let urls = `https://api.giphy.com/v1/gifs/search?api_key=DqbAfGDrEbDCiyGtVnUjCl2PCJDqHXVD`;
    let load = request.query.search;
    let gif = axios.get(urls+ "&q="+load + "&limit=1")
    // .then(function(response){  
    for(let i of response.data.data) {
        emptyObj[i.id] = i.images.original.urls;
    }
    
    response.json(gif.data)
    console.log(gif.data)
    // response.send(response.data)

})
app.get('/images/:search',(request, response)=>{
    let urls = `https://pixabay.com/api/?key=13923830-df4661fc6f67f3ecc5b2d1c5b`;
    let load = request.query.search;
    let pic = axios.get(urls+ "&q="+load + "&limit=1")
    // .then(function(response){  
    for(let i of response.data.hits) {
        emptyObj[i.id] = i.webformatURL;
    }
    
    response.json(pic.data)
    console.log(pic.data)
    // response.send(response.data)

})


// app.get("/", (request,response)=>{
//     response.send('is running')
// })
// app.get("/gif", (request, response)=>{

// })

app.listen(port, ()=>{
    console.log('running at http://localhost:5004/')
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
