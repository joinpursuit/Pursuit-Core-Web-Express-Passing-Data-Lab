const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hello Welcome to Jay World")
})

app.get("/gifs",async (req, res) => {
    try{
        let search = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=hwe2Y5XeKzjtPYOsihdW08ldEhfa6sPZ&q=&limit=25&offset=0&rating=G&lang=en`)
        res.json(search.data)
    } catch(err) {
        console.log(err)
        debugger
    }

})

app.get("/images",(req, res) => {
    var API_KEY = '14885795-4d662f25f2945f3249b35950a';
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
    $.getJSON(URL, function(data){
    if (parseInt(data.totalHits) > 0)
        $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
    else
        console.log('No hits');
    });   

})


app.listen(port, () => { console.log("Logged into port: ", port)})