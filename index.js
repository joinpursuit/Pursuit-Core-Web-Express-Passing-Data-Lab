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

    deleteGifs();

    let userSearch = document.querySelector("#giphyid");

    fetch(`http://localhost:1337/gifs/?search=${userSearch.value}`)
    .then((response) => {
        return response.json();
    })
    .then(info => {
        appendGifs(info);
    })
}

function appendGifs(resp) {
    
    for(let i = 0; i < resp.length; i++) {
        let giphyGifs = document.querySelector('#giphy');

        let newImg = document.createElement('img');
    
        newImg.src = resp[i];
        newImg.id = "theseGifImages"
        
        giphyGifs.appendChild(newImg);
    }
    // console.log("WORK", resp[10])
}

function createPics() {

    deleteImages();

    let userSearch = document.querySelector("#pixabayid");

    fetch(`http://localhost:1337/images/?search=${userSearch.value}`)
    .then((response) => {
        return response.json();
    })
    .then(info => {
        appendPics(info);
    })
}

function appendPics(resp) {
    
    for(let i = 0; i < resp.length; i++) {
        let pixabayPic = document.querySelector('#pixabay');
        let newImg = document.createElement('img');
    
        newImg.src = resp[i];
        newImg.id = "thesePicImages"
        
        pixabayPic.appendChild(newImg).style.height = "200px";
    }
    // console.log("WORK", resp[10])
}

function deleteGifs () {
    let images = document.querySelectorAll('#theseGifImages');
    console.log(images)
    for (let i = 0; i < images.length; i++) {
        images[i].parentNode.removeChild(images[i]);
    }
}

function deleteImages () {
    let images = document.querySelectorAll('#thesePicImages');
    console.log(images)
    for (let i = 0; i < images.length; i++) {
        images[i].parentNode.removeChild(images[i]);
    }
}