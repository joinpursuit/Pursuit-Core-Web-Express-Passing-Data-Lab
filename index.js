document.addEventListener("DOMContentLoaded", () => {
    let imageButton = document.getElementById("images");
    imageButton.addEventListener("click", getImages);

    let gifButton = document.getElementById("gifs");
    gifButton.addEventListener("click", getGifs);
})

function getImages(event) {
    event.preventDefault();
    console.log("Image button working");

    let searchBar = document.getElementById("searchBar");
    let searchValue = searchBar.value;
    let theDiv = document.getElementById("imageDiv")

    while(theDiv.hasChildNodes()) {
        theDiv.removeChild(theDiv.childNodes[0]);
    }

    axios.get(`http://localhost:3000/images?search=${searchValue}`)
    .then(function (response) {
        for (let i in response.data) {
            let img = document.createElement("img");
            img.src = response.data[i];
            theDiv.append(img);
        }
    })
}

function getGifs (event) {
    event.preventDefault();

    let searchBar = document.getElementById("searchBar");
    let searchValue = searchBar.value;
    let theDiv = document.getElementById("imageDiv")

    while(theDiv.hasChildNodes()) {
        theDiv.removeChild(theDiv.childNodes[0]);
    }

    axios.get(`http://localhost:3000/gifs?search=${searchValue}`)
    .then(function (response) {
        for (let i in response.data) {
            let img = document.createElement("img");
            img.src = response.data[i];
            theDiv.append(img);
        }
    })
}