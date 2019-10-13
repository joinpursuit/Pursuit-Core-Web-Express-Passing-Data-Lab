    const express = require("express");

    const axios = require('axios')

   const app = express();

   )
    
    app.get("/gif", (req, res) => {
        // let search = req.query.search
        url = "https://api.giphy.com/v1/gifs/search?api_key=qQ2bsFMuvVGd36lx3RvOnBg96Gmz6XvJ&q=spongebob&limit=5"
        let response = await axios.get(url)
            console.log(response)

    })



  

    app.listen(3000, () => {
        console.log("Running at http://localhost:3000/")
    })