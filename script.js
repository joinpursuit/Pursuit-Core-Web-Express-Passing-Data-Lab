document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#gif').addEventListener('click', getGif)
    document.querySelector('#img').addEventListener('click', getImage)
})

const getGif = async () => {
    const query = document.querySelector('input').value;
    let url = `http://localhost:5000/gifs?search=${query}`;
    const result = await axios.get(url);

    console.log(result)

    return display(result.data.data[0].images.original.url);
}

const getImage = async () => {
    const query = document.querySelector('input').value;
    let url = `http://localhost:5000/images?search=${query}`;
    const result = await axios.get(url);

    console.log(result)

    return display(result.data.hits[0].largeImageURL);
}

const display = (url) => {
    const img = document.createElement('img');
    img.src = url;
    document.querySelector('#result').append(img);
}