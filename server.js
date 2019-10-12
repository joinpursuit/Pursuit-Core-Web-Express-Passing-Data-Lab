const express = require('express');
const body = require('body-parser');

const api = require('./api/keys.js');
const app = express();

app.use(body.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.send('Hello')
})

const port = 5000;

app.listen(port, () => {
    console.log('`Listening at http://localhost:${port}');
    console.log(api);
})

