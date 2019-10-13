document.addEventListener('DOMContentLoaded', () =>{
    getButton().addEventListener('click', testing)
})

// const axios2 = require('axios');

function getButton() {
    return document.querySelector("#searchGiphy")
}

function testing() {
    // const myURL = 'http://localhost:1337/gifs'
    // const resp = await axios.get(myURL) 
    fetch("http://localhost:1337/gifs")
    .then((response) => {
        return response.json();
    })
    .then(info => {
        appendGifs(info);
    })
}

function appendGifs(resp) {

    // let myOperator = document.querySelector('#operator').value;

    // const myURL = 'http://localhost:1337/gifs'
    // const resp = await axios2.get(myURL)  
    
    let giphyGifs = document.querySelector('#giphy');

    let newImg = document.createElement('img');

    newImg.src = resp[80];

    // newImg.id = 'giphyid';

    giphyGifs.appendChild(newImg);

    console.log("WORK", resp[80])
}