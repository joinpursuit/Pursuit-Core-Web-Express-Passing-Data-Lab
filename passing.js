
addEventListener("DOMContentLoaded", () =>{
    let button1 = document.getElementById("#button1").value;
    button1.addEventListener('click', fetchServerData);
    let button2 = document.querySelector("#button2").value;
    button2.addEventListener('click', fetchServerData2)
})

const fetchServerData = async()=>{
    let search = document.getElementById("#search").value;
    const url = `http://localhost:5004/${search}`
    const response = await Axios.get(url)
    let results = document.getElementById('imagesDiv')
    console.log(response.data)
    for(let gif of response.data){
        let img = document.createElement('button1')
        img.src = gif
        results.append(img)
    }
}
const fetchServerData2 = async()=>{
    let search = document.getElementById("#search").value;
    const url = `http://localhost:5004/${search}`
    const response = await Axios.get(url)
    let results = document.getElementById('imagesDiv')
    console.log(response.data)
    for(let images of response.data){
        let image = document.createElement('button2')
        image.src = image
        results.append(img)
    }
}
