const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 8080

app.use(cors())
app.get('/', (req, res) => {
    res.json("hi")
})

app.get('/images', (req, res) => {
    const getImg = req.query.search; 
    const url = `https://pixabay.com/api/?key=5696431-75c30ffe4ffe5adb6734cc8f2&q=${getImg}`
    console.log(url);
    
    axios.get(url)
    .then((response) => {
        res.send(response.data)
    })
    .catch((err) => {
        // res.json({message:"Error"})
        res.send(err)
    })
})

app.get('/gifs/:search', (req, res) => {
    const getGifs = req.params.search;
    const url= `http://api.giphy.com/v1/gifs/search?api_key=CrMmJIEgitX1ER3uLXUprAP7OwXbho3o&q=${getGifs}`
    axios.get(url)
    .then((response) => {
        res.send(response.data);
    })
    .catch((err) => {
        console.log(err.message)
        res.json({message: "Error"})
    })
})




app.listen(port, () => {
    console.log("server is listening");
    
})

