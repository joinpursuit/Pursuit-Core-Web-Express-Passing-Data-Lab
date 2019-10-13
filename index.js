document.addEventListener("DOMContentLoaded", () => {
    // let imgButton = document.getElementById("imgSearch");
    // imgButton.addEventListener('click', loadImageFromServer);

    let gifButton = document.getElementById("gifSearch");
    gifButton.addEventListener('click', renderGifImages);
})

const renderGifImages = async () => {
    console.log("button was clicked")
    let searchQuery = document.getElementById("search").value;
    const myUrl = `http://localhost:3000/gifs/${searchQuery}`;
    const response = await axios.get(myUrl);
    let results = document.getElementById("image-results");

    for(let i of response.data) {
        let img = document.createElement("img");
        img.src = i
        results.append(img);
    }
    
}

const loadImageData = async () => {
    const myURL = "http://localhost:3000/"
    const response = await axios.get
}

const renderImageFromServer = () => {
    let button = document.getElementById("imgButton");
    let searchQuery = document.getElementById("search");    
}

const renderGifFromServer = () => {
    let button = document.getElementById("gifButton");
    let searchQuery = document.getElementById("search");

}