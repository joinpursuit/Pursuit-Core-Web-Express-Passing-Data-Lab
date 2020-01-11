addEventListener("DOMContentLoaded", () =>{
    let button1 = document.querySelector("#gifSearch")
    button1.addEventListener('click', loadGifs);
    let button2 = document.querySelector("#imageSearch")
    button2.addEventListener('click', loadImages);
})
const loadGifs = async()=>{
    let search = document.querySelector("#search");
    const url = `http://localhost:3000/gifs/${search.value}`
    const response = await axios.get(url)
    let results = document.querySelector('#imagesDiv')
    console.log(response.data)
    for(let gif of response.data){
        let li = document.createElement("li")
        li.innerText = gif.response.data
        results.appendChild(li)
    }
}
const loadImages = async()=>{
    let search = document.querySelector("#search");
    const url = `http://localhost:3000/images/${search.value}`
    const response = await axios.get(url)
    let results = document.querySelector('#imagesDiv')
    console.log(response.data)
    for(let images of response.data){
        let li = document.createElement("li")
        li.innerText = images.response.data
        results.appendChild(li)
    }
}