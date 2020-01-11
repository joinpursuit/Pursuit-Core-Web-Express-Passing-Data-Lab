const express = require("express");
const cors = require("cors")
const axios = require("axios")


const app = express();
app.use(cors())

const port = 3000

app.get("/gif/", (req,res)=>{
const query = req.query
})