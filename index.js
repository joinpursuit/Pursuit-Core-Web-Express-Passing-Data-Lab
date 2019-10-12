const apiUrl = 'http://localhost:8000';

document.addEventListener('DOMContentLoaded', () => {
	let gifButton = document.querySelector('#gif-button');
	let imgButton = document.querySelector('#img-button');
	gifButton.addEventListener('click', () => {
	 getThingFromOnline(event ,'gif')
	});
	imgButton.addEventListener('click', () => {
		getThingFromOnline(event,'img')
	});

})

async function getThingFromOnline(e, type){
	e.preventDefault();
	let input = document.querySelector('input');
	let url;
	switch(type){
		case 'gif': url = `${apiUrl}/gif/?search=${input.value}`;
		break;
		case 'img': url = `${apiUrl}/images/?search=${input.value}`;
		break;
	}
	let response = await axios.get(url);
	console.log(response);
	updateGif(response.data[Math.floor(Math.random() * response.data.length)]);

}

function updateGif(url){
	console.log(url);
	let gif = document.createElement('img');
	let board = document.querySelector('.results');
	board.removeChild(board.firstChild);
	gif.src = url;
	gif.className = 'img-sizer';
	board.appendChild(gif);

}

