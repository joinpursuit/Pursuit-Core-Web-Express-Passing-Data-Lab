document.addEventListener("DOMContentLoaded", () => {
    let imgButton = document.getElementById("imgButton");
    imgButton.addEventListener('click', loadImageFromServer);

    let gifButton = document.getElementById("imgButton");
    gifButton.addEventListener('click', loadGifFromServer);
})

const loadImageFromServer = () => {
    let button = document.getElementById("imgButton")
}

const loadGifFromServer = () => {
    let button = document.getElementById("gifButton")
}