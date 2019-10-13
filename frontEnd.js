let info;

document.addEventListener('DOMContentLoaded', () => {
    let gifButton = document.querySelector('#gif');
    gifButton.addEventListener('click', clickGifSearch)

    let imgButton = document.querySelector('#images');
    imgButton.addEventListener('click', clickImgSearch)

})


const loadDataFromServer = async (url) => {
    const {
        data
    } = await axios.get(url);

    return data
}

const clickGifSearch = async () => {
    let input = document.querySelector('input').value;
    let gifUrl = `http://localhost:8000/gif?search=${input}`;

    info = await loadDataFromServer(gifUrl)
    return displayToScreen(info)
}

const clickImgSearch = async () => {
    let input = document.querySelector('input').value;
    let imgUrl = `http://localhost:8000/images?search=${input}`;

    info = await loadDataFromServer(imgUrl)
    return displayToScreen(info)
}

const displayToScreen = (source) => {
    clearScreen()
    let results = document.querySelector('#searchResults');

    let img = document.createElement('img')
    let randomNum = getRandomNum(source.length, 0)
    console.log(randomNum);

    img.src = (source[randomNum])
    results.append(img)
}

const getRandomNum = (max, min) => Math.floor((Math.random() * max) + min);

const clearScreen = () => {
    let container = document.querySelector('#searchResults');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}