const express = require('express');
const cors = require('cors');
const axios = require('axios');
let app = express();
let port = 8000;

app.use(cors());

app.get('/gif', async (req, res) => {
	let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=0BYfvFIo0M8HDE1GGPUeNkWwl9Uu1NPz&q=${req.query.search}&limit=50&offset=0&rating=PG-13&lang=en`;
	let response = await axios.get(apiUrl);
	console.log(response.data.data);
	let trimmedData = response.data.data.map((elem) => {
		return elem.images.original.url;
	});
	res.json(trimmedData);
})

app.get('/images', async (req, res) => {
	let apiUrl = `https://pixabay.com/api/?key=13920517-784eb58f85f630a52ea38b2f4&q=${req.query.search}`;
	let response = await axios.get(apiUrl);
	console.log(response.data.hits);
	let trimmedData = response.data.hits.map((elem) => {
		return elem.webformatURL;
	});
	res.json(trimmedData);
})


app.all('/', (req, res) => {
	res.send('Thank you for your service server.');
});












app.listen(port, () => {
	console.log('I am your server, and I await your command...');
})