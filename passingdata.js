document.addEventListener("DOMContentLoaded", () => {});
const getRequest = () => {
    let radioGif = document.querySelector("#gifSearch");
    let radioImg = document.querySelector("#imageSearch");
    if(radioGif.checked === true){
        getGif();
    } else if(radioImg.checked === true){
        getImage();
    } else {
        errorMsg();
    }
    }
const getImage = async () => {
    let inputBox = document.querySelector("#searchBar");
    let image = document.querySelector("img")
    let url = `http://localhost:8000/image?search=${inputBox.value}`
    let imageUrl = await axios.get(url).then((response) => {return response.data})
        console.log(imageUrl)
    image.src = imageUrl
}
const getGif = async () => {
    let inputBox = document.querySelector("#searchBar");
    let image = document.querySelector("img");
    let url = `http://localhost:8000/gif/?search=${inputBox.value}`
    let arr = await axios.get(url).then((response)=> {return response.data[0]})
        image.src= arr
}
const errorMsg = () => {
    console.log("Select Media Type!")
}
