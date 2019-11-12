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
    const myUrl = "https://api.giphy.com/v1/gifs/search?api_key=DECAcAVA40wfxP0q9SIMDOsNjtwh3F7g&q";
    let data = []

    let searchTerm = request.params.search
    let axiosResponse = await axios.get(myUrl + "&q=" + searchTerm + "&limit=25");

    for(let key of axiosResponse.data.data) {
        data.push(key.images.original.url)
    }

    console.log(data)
    response.json(data)
})

app.get("/images/:search", async (request, response) => {
    let searchTerm = request.params.search
    const myUrl = `https://pixabay.com/api/?key=13922645-f7f879454595df6eec2520603&q=${searchTerm}&per_page=25`;
    let data = []

    let axiosResponse = await axios.get(myUrl);

    for(let key of axiosResponse.data.hits) {
        data.push(key.webformatURL)
    }

    console.log(data)
    // console.log(axiosResponse.data)
    response.json(data)
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})
