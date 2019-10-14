document.addEventListener("DOMContentLoaded", () => {
    let imgButton = document.getElementById("imgSearch");
    imgButton.addEventListener('click', renderImages);

    let gifButton = document.getElementById("gifSearch");
    gifButton.addEventListener('click', renderGifImages);
})

const renderGifImages = async () => {
    console.log("button was clicked")
    let searchQuery = document.getElementById("search").value;
    const myUrl = `http://localhost:3000/gifs/${searchQuery}`;
    const response = await axios.get(myUrl);
    let results = document.getElementById("image-results");

    for(let gif of response.data) {
        let img = document.createElement("img");
        img.src = gif
        results.append(img);
    }
    
}

const renderImages = async () => {
    console.log("button was clicked")
    let searchQuery = document.getElementById("search").value;
    const myUrl = `http://localhost:3000/images/${searchQuery}`;
    const response = await axios.get(myUrl);
    let results = document.getElementById("image-results");
    console.log(response.data)
    for(let image of response.data) {
        let img = document.createElement("img")
        img.src = image
        results.append(img)
    }

}



