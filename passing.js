
addEventListener("DOMContentLoaded", () =>{
    
    let button1 = document.getElementById("button1")
    button1.addEventListener('click', fetchServerData);
    let button2 = document.getElementById("button2")
    button2.addEventListener('click', fetchServerData2);
})

const fetchServerData = async()=>{
    let search = document.getElementById("search").value;
    const url = `http://localhost:5004/gifs/${search}`
    const response = await axios.get(url)
    let results = document.getElementById('imagesDiv')
    console.log(response.data)
    for(let gif of response.data){
        let image = document.createElement('img')
        image.src = gif
        results.append(image)
    }
}

const fetchServerData2 = async()=>{
    let search = document.getElementById("search").value;
    const url = `http://localhost:5004/images/${search}`
    const response = await axios.get(url)
    let results = document.getElementById('imagesDiv')
    console.log(response.data)
    for(let images of response.data){
        let image = document.createElement('img')
        image.src = images
        results.append(img)
    }
}
