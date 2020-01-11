const express = require("express");
const cors = require("cors");
const axios = require("axios")
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/gifSearch", async(req, res) => {
    // let key = "CAdm5WTGPw6Ae8Ouq0wPiKRZrUtZALNo"
    console.log(req.params)
    try {
        req = await axios.get("https://api.giphy.com/v1/gifs/search?api_key=CAdm5WTGPw6Ae8Ouq0wPiKRZrUtZALNo&q=&limit=25&offset=0&rating=G&lang=en")
    } catch(err) {
        console.log(err)
    }

    res.json({
        success: "made it",
        res: res.data.data
    })
})



app.listen(port, ()=> {
    console.log("you are on port ", port)
})