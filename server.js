const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    console.log('req params', req.params)
    res.send('This is the home page')
})

app.post('/gif', (req, res) => {
    // const search = req.body.search
    // const limit = req.body.limit

    // res.json(search +  ' ' + limit)
    console.log(req.body)
})


app.listen(4000, () => {
    console.log('This server is running at localhost:4000/')
})

