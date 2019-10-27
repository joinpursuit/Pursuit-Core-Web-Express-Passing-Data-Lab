const gifButton = document.getElementById("gif")
const picButton = document.getElementById("pic")
const name = document.getElementById("name")
const content = document.getElementById("content")

picButton.addEventListener("click", (event) => {
    imgInput(name.value)
})

const createImg = (imgs) => {
    const img = document.createElement("img")
    img.src = imgs  
    content.appendChild(img)
}

const loopImg = (arr) => {
    content.innerHTML = ""
    for(let i=0; i< arr.length; i++){
        createImg(arr[i].largeImageURL)
    }
        

}

const imgInput = (input) => {
    const url = `http://localhost:8080/images?search=${input}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        loopImg(response.hits)
    })
    .catch((err) => {
        console.log(err);
        
    })
}   

gifButton.addEventListener("click", (event) => {
    // console.log(name.value);
            gifInput(name.value)

    })


const loopGif = (arr) => {
    content.innerHTML = ""
    for(let i=0; i< arr.length; i++){
      createImg(arr[i].url);
      
    }

}

const gifInput = (input) => {
    const url = `http://localhost:8080/gifs/${input}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
        // console.log(response.data);
        loopGif(response.data)
      
       
        
    })
    .catch((err) => {
        console.log(err);
        
    })
}