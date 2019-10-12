const express = require("express");
const app = express();
const bodyParser = require("body-parser")
let port = 3000

app.use(bodyParser.urlencoded( {
    extended: false
}))

app.get("/gifs", () => {

})

app.get("/images", () => {
    
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})

