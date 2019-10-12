const express = require('express');
const bodyParser = require = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

app.listen(0001, () => {
    console.log(`running at http://localhost:0001`)
})


app.get('/gif', (request, response) => {

})

app.get('/images', (request, response) => {

}) 

