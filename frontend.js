document.addEventListener("DOMContentLoaded", () => {
    let gifBtn = document.querySelector("#gifs")
    gifBtn.addEventListener("click", getGifsData) 

    let imageBtn = document.querySelector("#images")
    imageBtn.addEventListener("click", getImageData)
})

const getGifsData = async () => {
    let baseUrl = 'http://localhost:3012/gifs/'
    let endpoint = getInput()
    // console.log(endpoint)
    let response = await axios.get(`${baseUrl}?search=${endpoint}`)
    displayGifs(response.data.data)
}

const displayGifs = (arr) => {
    // console.log("arr", arr)
    let gifs = document.querySelector("div")
    gifs.innerText = ""
    for (let i = 0; i < arr.length; i++) {
    
        let image = document.createElement("img")
        image.src = arr[i].images.original.url
        gifs.appendChild(image)
    }


}

const getInput = () => {
    let input = document.querySelector("input")
    let endpoint = input.value

    return endpoint
}

const getImageData = async() => {
    let baseUrl2 = "http://localhost:3012/images/"
    let endpoint = getInput()
    let response = await axios.get(`${baseUrl2}?lookup=${endpoint}`)
        console.log(response)
        displayImage(response.data.hits)
}

const displayImage = (arr) => {
    console.log(arr)
    let imageDiv = document.querySelector('div')
    imageDiv.innerText = ""
    for(let i = 0; i < arr.length; i++) {
        let image = document.createElement("img")
        image.src = arr[i].largeImageURL
        imageDiv.appendChild(image)
    }
}

 

