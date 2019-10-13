document.addEventListener('DOMContentLoaded', () =>{
    gifButton().addEventListener('click', createGifs)
    picButton().addEventListener('click', createPics)

})


function gifButton() {
    return document.querySelector("#searchGiphy")
}

function picButton() {
    return document.querySelector("#searchPixabay")
}

function createGifs() {
    // const myURL = 'http://localhost:1337/gifs'
    // const resp = await axios.get(myURL)
    // https://api.giphy.com/v1/gifs/search?api_key=VeFePJ4kLDnXblmrfUBPNCu23R10GO9m&q=spongebob&limit=25&offset=0&rating=G&lang=en 

    let userSearch = document.querySelector("#giphyid");

    // console.log(userSearch.value);

    fetch(`http://localhost:1337/gifs/?search=${userSearch.value}`)
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
    
    for(let i = 0; i < resp.length; i++) {
        let giphyGifs = document.querySelector('#giphy');

        let newImg = document.createElement('img');
    
        newImg.src = resp[i];
    
        // newImg.id = 'giphyid';
    
        giphyGifs.appendChild(newImg);
    }
    // console.log("WORK", resp[10])
}
// resp.data[4].images.fixed_height.url

function createPics() {

    let userSearch = document.querySelector("#giphyid");

    fetch(`http://localhost:1337/gifs/?search=${userSearch.value}`)
    .then((response) => {
        return response.json();
    })
    .then(info => {
        appendPics(info);
    })
}

function appendPics(resp) {

    // let myOperator = document.querySelector('#operator').value;
    // const myURL = 'http://localhost:1337/gifs'
    // const resp = await axios2.get(myURL)  
    
    for(let i = 0; i < resp.length; i++) {
        let giphyGifs = document.querySelector('#giphy');

        let newImg = document.createElement('img');
    
        newImg.src = resp[i];
    
        // newImg.id = 'giphyid';
    
        giphyGifs.appendChild(newImg);
    }
    // console.log("WORK", resp[10])
}