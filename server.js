// Joseph P. Pasaoa
// Imagery Server | Express Passing Data Lab
//

/* CUSTOM HELPERS */
const log = console.log;
require('dotenv').config();
  var keyPixabay = process.env.KEY_PIXABAY;
  var keyGiphy = process.env.KEY_GIPHY;


/* MODULE INITS */
// external //
const axios = require('axios');

// internal //
const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
  app.use(cors());
const path = require('path');
const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({
    extended: false
  }));


/* SERVER INIT */
app.listen(port, () => {
    log(`The JoeyServer is now taking reqs and serving resses on port ${port}. Carpe diem.`);
});
app.use('/', express.static(path.join(__dirname, 'errors')));


/* SERVER MAINS */

// GIFS SYSTEM //
// app.get("/gifs/:search", async (req, res) => {
//   const searchToSend = '&q=' + req.params.search; // encodeURIComponent(req.params.search);
//   log(searchToSend);
//   const results = await getGiphyData(searchToSend);
//   res.json(results);
// });

// const getGiphyData = async (queryToAdd) => {
//   let url = `https://api.giphy.com/v1/gifs/search?api_key=${keyGiphy}${queryToAdd}`;
//   url += '&limit=7&offset=0&rating=R&lang=en'; // adds remaining parameters
//   let giphReponse = await axios.get(url);
//   log(giphReponse.data);
//   return giphReponse;
// }


// PICS SYSTEM //
app.get("/images/:search", async (req, res) => {
  const searchToSend = '&q=' + encodeURIComponent(req.params.search);
  const results = await getPixabayData(searchToSend);
  res.json(results);
});

const getPixabayData = async (queryToAdd) => {
  let url = `https://pixabay.com/api/?key=${keyPixabay}${queryToAdd}`;
  url += '&per_page=7';  // adds remaining parameters
  log('apiUrl: ', url);
  let pixaReponse = await axios.get(url);
  log(pixaReponse.data);
  return pixaReponse.data;
}




/* NO-ROUTE CATCH */
app.use("*", (req, res) => {
    toErrorPage(res);
});

/* SERVER HELPERS */
const toErrorPage = (res) => {
  res.status(418).sendFile(path.join(__dirname + '/errors/error418.html'));
}