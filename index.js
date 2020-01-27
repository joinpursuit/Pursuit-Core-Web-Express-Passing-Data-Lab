let gif = document.querySelector("#gif")
let image = document.querySelector("#img")
let query = document.querySelector("#query")
let queryResult = document.querySelector("#queryResult")
let ul = document.createElement("ul")
const port = 4000

const displayGif = (data) => {
    data.forEach( el => {
        let li = document.createElement("li")
        let img = document.createElement("img")
        img.src = el.images.downsized_large.url
        li.appendChild(img)
        ul.appendChild(li)
        queryResult.appendChild(ul)
    });
}

const displayImage = (data) => {
    data.forEach( el => {
        let li = document.createElement("li")
        let img = document.createElement("img")
        img.src = el.largeImageURL
        li.appendChild(img)
        ul.appendChild(li)
        queryResult.appendChild(ul)
    });
}

const getGif = async () => {
    try {
        let url = `http://localhost:${port}/gifs?search=${query.value}`;
        const search = await axios.get(url);
        debugger
        displayGif(search.data.gifs);
    } catch(err){
        console.log(err)
    }
}

const getImage = async () => {
    try {
        let url = `http://localhost:${port}/images?search=${query.value}`;
        const search = await axios.get(url);
        debugger
        displayImage(search.data.images);
    } catch(err){
        console.log(err)
    }
}

gif.addEventListener('click', getGif)
image.addEventListener('click', getImage)