document.addEventListener("DOMContentLoaded", () => {
    setSearch()
    setGif()
})

const setSearch = () => {
    let imageSearch = document.querySelector("#imageSearch");
    imageSearch.addEventListener("click", displayImage);
} 

const setGif = () => {
    let gifSearch = document.querySelector("#gifSearch");
    gifSearch.addEventListener("click", displayGifs);
} 

const displayImage = async () => {
    clearDiv()
    let input = document.querySelector("input");
    try{
        let res = await axios.get(`http://localhost:3000/images?q=${input.value}`)
        res.data.forEach(pic =>{
            let div = document.querySelector("#pics");
            let image = document.createElement("img");
            image.src = pic;
            div.appendChild(image);
        })
    } catch(err) {
        console.log(err)
    }
    input.value = "";
}

const displayGifs = async () => {
    clearDiv()
    let input = document.querySelector("input");
    try{
        let res = await axios.get(`http://localhost:3000/gifs?q=${input.value}`);
        res.data.forEach(gif =>{
            div = document.querySelector("#pics");
            let image = document.createElement("img");
            image.src = gif;
            div.appendChild(image);
        })
    } catch(err) {
        console.log(err)
    }
    input.value = "";
}

const clearDiv = () => {
    let div = document.querySelector("#pics")
    if(div) div.innerHTML = "";
}