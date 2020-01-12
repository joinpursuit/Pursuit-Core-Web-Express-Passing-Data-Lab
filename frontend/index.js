let pixyKey = "14881651-1e1228a1f06e5912049e890d8"
let gifKey = "eZzQ4D3kLuqDmPlQUgDqmlD9dGc4JZl1"
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
}

const displayGifs = async () => {
    let input = document.querySelector("input");
    try{
        let res = await axios.get(`http://localhost:3000/gifs?q=${input.value}`);
        res.data.forEach(gif =>{
            let div = document.querySelector("#pics");
            let image = document.createElement("img");
            image.src = gif;
            div.appendChild(image);
        })
    input.value = "";
    } catch(err) {
        console.log(err)
    }
}