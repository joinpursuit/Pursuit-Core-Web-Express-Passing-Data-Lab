const express = require('express')
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))

// app.get('/', (request,response)=>{
//     response.send(query)
// })
app.get('/dog/:breed', (request, response)=>{
    console.log('req.params',request.body)
response.send('/dog route hit with params: '+ JSON.stringify(request.params))
})
app.post('/load', (request, response)=>{
console.log(request);
response.send('load')
})

app.get('/', (request, response)=>{
    console.log(request.query)
    response.send('types')
})
app.listen(5004, ()=>{
    console.log('running at http://localhost:5004/')
})