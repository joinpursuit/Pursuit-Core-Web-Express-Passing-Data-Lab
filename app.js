const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/gif", async (req,res) => {
    try{
        let request = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=EuNi39MeeBPzJPWLqTWVYXxSFFgecZqB&q=${req.query.search}&limit=25&offset=0&rating=PG-13&lang=en`);
        res.json({
            success: 200,
            gifs: request.data.data
        })
    } catch(err) {
        res.json({
            status: "ERROR",
            error: err,
        })
    }
})


app.get("/image", async (req, res) => {
    try{
        let request = await axios.get(`https://pixabay.com/api/?key=14862867-65609b31bc6cc769927c27ad3&q=${req.query.search}&image_type=photo`);
        res.json({
            success: 200,
            images: request.data,
        })
    } catch(err) {
        res.json({
            status: "ERROR",
            error: err,
        })
    }
})

app.listen(port, () => {
    console.log("Listening on port ", port);
})