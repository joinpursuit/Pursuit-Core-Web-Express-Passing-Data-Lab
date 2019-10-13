const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded ({
    extended: false
}))




app.listen(4000, ()=>{
    console.log('Running at http://localhost:4000')
})