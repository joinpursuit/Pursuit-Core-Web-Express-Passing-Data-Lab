const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let port = 3000;
const axios = require("axios");
const cors = require("cors");
app.use(cors())

app.use(bodyParser.urlencoded( {
    extended: false
}))

app.get("/gifs/:search", async (request, response) => {
    const myUrl = "https://api.giphy.com/v1/gifs/search?api_key=kGWrS9X81HIL2z5b05i2V64xJ6TvoWr5";
    let data = []
    
    let searchTerm = request.params.search
    let axiosResponse = await axios.get(myUrl + "&q=" + searchTerm + "&limit=25");

    for(let key of axiosResponse.data.data) {
        data.push(key.images.original.url)
    }

    console.log(data)
    response.json(data)
})

app.get("/images/:search", () => {
    let data = {}
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})

