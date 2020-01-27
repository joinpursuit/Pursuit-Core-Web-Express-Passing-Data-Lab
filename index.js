let gif = document.querySelector("#gif")
let image = document.querySelector("#img")
let query = document.querySelector("#query")
let ul = document.querySelector("ul")
const port = 4000

const display = (url) => {
    const img = document.createElement('img');
    img.src = url;
    document.querySelector("#queryResult").append(img);
}

const getGif = async () => {
    try {
        let url = `http://localhost:${port}/gifs?search=${query.value}`;
        const search = await axios.get(url);
        debugger
        display(search.data.data.gifs);
    } catch(err){
        console.log(err)
    }
}

const getImage = async () => {
    try {
        let url = `http://localhost:${port}/images?search=${query.value}`;
        const result = await axios.get(url);
        display(result.data.hits[0].largeImageURL);
    } catch(err){
        console.log(err)
    }
}

gif.addEventListener('click', getGif)
image.addEventListener('click', getImage)


//     gifSearch.addEventListener("click", async (e) => {
//       ul.innerHTML = ""
//       let results = await axios.get(`http://localhost:3000/gifs?search=${searchTerm.value}`)
//       results.data.gifs.forEach((el) => {
//         let li = document.createElement("li")
//         let img = document.createElement("img")
//         img.src = el.images.downsized_large.url
//         li.appendChild(img)
//         ul.appendChild(li)
//       });
//     })
     
//     imgSearch.addEventListener("click", async (e) => {
//       ul.innerHTML= ""
//       let results = await axios.get(`http://localhost:3000/images?search=${searchTerm.value}`)
//       results.data.images.forEach((el) => {
//         let li = document.createElement("li")
//         let img = document.createElement("img")
//         img.src = el.webformatURL
//         li.appendChild(img)
//         ul.appendChild(li)
//       });
     
//     })
//   })