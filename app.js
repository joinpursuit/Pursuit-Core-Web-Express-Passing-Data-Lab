const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();

port = 3000;

app.get("/", (req,res) => {
    req.url("")
})

app.get("/gifs", (req,res) => {
    await axios.get(``)
    res.json({gifs: [   ]})
})

app.listen(port, () => {
    console.log("App is listening on port ", port)
})