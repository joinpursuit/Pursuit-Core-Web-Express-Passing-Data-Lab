// Joseph P. Pasaoa
// Imagery Server | Express Passing Data Lab
//

/* CUSTOM HELPERS */
const log = console.log;
require('dotenv').config();
  var keyPixabay = process.env.KEY_PIXABAY;
  var keyGiphy = process.env.KEY_GIPHY;


/* MODULE INITS */
// outwards //
const axios = require('axios');

// inwards //
const express = require('express');
  const app = express();
  const port = 9000;
const cors = require('cors');
  app.use(cors());
const path = require('path');


/* SERVER INIT */
app.listen(port, () => {
    log(`The JoeyServer is now taking reqs and serving resses on port ${port}. Carpe diem.`);
});
app.use('/', express.static(path.join(__dirname, 'errors')));


/* SERVER MAINS */
app.get("/:route", async (req, res) => {
    getApiData(req.params.route, req, res);
});

const getApiData = async (route, req, res) => {
  const userInput = req.query.search;
  let url = `https://`;
  if (route === 'images') {
    url += `pixabay.com/api/?key=${keyPixabay}&q=${encodeURIComponent(userInput)}`;
    url += '&per_page=40';
  } else {
    url += `api.giphy.com/v1/gifs/search?api_key=${keyGiphy}&q=${userInput}`;
    url += '&limit=40&offset=0&rating=R&lang=en';
  }
  let response = await axios.get(url);
  log(url, response.data);
  res.json(response.data);
}


/* NO-ROUTE CATCH */
app.use("*", (req, res) => {
  res.status(418).sendFile(path.join(__dirname + '/errors/error418.html'));
});
