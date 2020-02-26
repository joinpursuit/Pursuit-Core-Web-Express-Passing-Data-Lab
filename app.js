const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express();
const port = 3000
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/gifs", async (req,res) => {
    try{
        let request = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=gzd5QMerlYZRm97VihohsmpTccaZR2XO&q=${req.query.q}&limit=25&offset=0&rating=G&lang=en`);
        res.json({
            sucess: "200",
            gifs: request.data.data
        })
    } catch(err){
        res.json({
            status: "ERROR",
            error: err
        })
    }
})

app.get("/image", async (req,res) => {
    try{
        let request = await axios.get(`https://pixabay.com/api/?key=15103068-69f138cf57ec42c2aaf881483&q=${req.query.q}&image_type=photo`);
        res.json({
            sucess: 200,
            gifs: request.data
        })

    } catch (err){
        res.json({
            status: "Error",
            err: err
        })

    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })