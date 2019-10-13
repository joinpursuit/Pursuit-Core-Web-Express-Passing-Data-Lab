const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")
const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({
    extended: false
}))

const port = 3000

app.listen(3000, () => {
    console.log(`running at http://localhost:${port}`)
})

app.use(cors());

app.get("/gifs/:search", async (req, res) => {
    res.status(200)
    let userInput = req.params.search;
    console.log("That userInput I sent ya ", userInput)
    let myUrl = `https://api.giphy.com/v1/gifs/search?api_key=XL5RlPudoVOe9vE4saTbqetM2ylHuSyw&q=${userInput}`
    myUrl += "&limit=25&offset=0&rating=G&lang=en"
    const getGif = async () => {
        try {
            const result = await axios.get(myUrl)
            // console.log("Data from site: ", result.data.data)
            const gifs = result.data.data
            console.log("here's 25 gifs: " + gifs)
            return gifs
        } catch (err) {
            console.log("Oops! All Errors! " + err)
        }
    }
    let gifs = await getGif()
    console.log("gifs: ", gifs)
    res.json(gifs)

    // res.set("Content-Type", "application/json")
})