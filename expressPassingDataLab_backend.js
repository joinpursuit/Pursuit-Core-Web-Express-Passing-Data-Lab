const express = require('express');
const axios = require ('axios');
const app = express();

// const imgAPI = `https://pixabay.com/images/search/${req}`;
// const gifAPI = `https://api.giphy.com/v1/gifs/search?api_key=oPeDxNh6j8L19KlXicskRFXA3txlJWtS&q=${request}&limit=1`;

app.get('/images/:search', (request,response)=>{
    const req = request.params

    axios
    .get(imgAPI)
    .then((response)=>{

    })
    .catch((error)=>{
        console.log('error')
    })

})

app.get('/gif/:search/', (request,response)=>{


    axios
    .get(gifAPI)
    .then((response)=>{
        console.log(response)
        let result = response.data;
        console.log(result)
    })
    .catch((error)=>{
        console.log('error')
    })

})

app.listen(4444, ()=>{
    console.log('Running on port 4444')
})