document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".container")
    let userInput = document.querySelector("#userInput")
    let gifButton = document.querySelector("#gifButton")
    let imageButton = document.querySelector("#imageButton")

    gifButton.addEventListener("click", async () => {
        container.innerHTML = "";
        let resultsGif = await axios.get(`http://localhost:3000/gifs?search=${userInput.value}`)
        resultsGif.data.gifs.forEach(el => {
            let img = document.createElement("img")
            img.src = el.images.downsized_large.url   
            container.appendChild(img)  
        })
    })

    imageButton.addEventListener("click", async () => {
        container.innerHTML = "";
        let resultsImage = await axios.get(`http://localhost:3000/images?search=${userInput.value}`)
        debugger
        resultsImage.data.gifs.hits.forEach(el => {
            let img = document.createElement("img")
            img.src = el.webformatURL   
            container.appendChild(img)
        })
    })
})