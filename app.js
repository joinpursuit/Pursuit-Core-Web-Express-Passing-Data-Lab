let gif = document.querySelector("#gif")
let image = document.querySelector("#img")
let query = document.query.Selector("#query").value


gif.addEventListener('click', getGif)
image.addEventListener('click', getImage)

const getGif = async () => {
    let url = `http://localhost:5000/gifs?search=${query}`;
    const result = await axios.get(url);
    return display(result.data.data[0].images.original.url);
}

const getImage = async () => {
    const query = document.querySelector('input').value;
    let url = `http://localhost:5000/images?search=${query}`;
    const result = await axios.get(url);
    return display(result.data.hits[0].largeImageURL);
}

const display = (url) => {
    const img = document.createElement('img');
    img.src = url;
    document.querySelector("#queryResult").append(img);
}