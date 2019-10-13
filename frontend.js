document.addEventListener("DOMContentLoaded", () =>{
let form = document.querySelector("#form");
form.addEventListener("submit", () => {
    event.preventDefault();
})

let gifButton = document.querySelector("#gifSearch")
gifButton.addEventListener('click', () =>{
    gifSearch()
})
let imageButton = document.querySelector("#imageSearch")
imageButton.addEventListener('click', ()=>{
    imageSearch()
})
})

async function gifSearch () {
    let input = document.querySelector("#searchInput")
    console.log(input.value)
    const myUrl = `http://localhost:4000/gifs?search=${input.value}`
    console.log(myUrl)
    const resp = await axios.get(myUrl) 
    let div = document.querySelector("#url")
    for(let i =0; i<resp.data.length;i++){
        let image = document.createElement("img")
         image.src = resp.data[i] 
        div.appendChild(image)
    }
}
 
async function imageSearch () {
    let input = document.querySelector("#searchInput")
    const myUrl = `http://localhost:4000/images?search=${input.value}`
    console.log(myUrl)
    const resp = await axios.get(myUrl) 
    let div = document.querySelector("#url")
    for(let i =0; i<resp.data.length;i++){
        let image = document.createElement("img")
         image.src = resp.data[i]
         image.height = 200;
        div.appendChild(image)
    }
}
