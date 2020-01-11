const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const axios = require("axios")

const port = 3000

const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/gif", async (req, res) => {
    try {
    let gifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=jEawtlGCmvF2hqdMR4dG5JCteM9SibcI&q=${req.query.search}&limit=25&offset=0&rating=G&lang=en`) 
    res.json({success:200,
    gifs: gifs.data
})

} catch (error) {
    
}
})


app.listen(port, () => {
    console.log("Listening to port ", port)
})