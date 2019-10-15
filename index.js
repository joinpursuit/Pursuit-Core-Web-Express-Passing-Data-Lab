document.addEventListener("DOMContentLoaded",()=>{
    console.log("content loaded");
    let gifBtn = document.getElementById("gifs")
    gifBtn.addEventListener("click",gifBtnListner);
    
    let imgBtn = document.getElementById("images")
    imgBtn.addEventListener("click",imgBtnListner);
    // let imgBtn = document.getElementById("images")
    // imgBtn = addEventListener("click",renderImages)
    // gifBtnListner()
})

const  gifBtnListner = async() =>{
    let query = document.getElementById("text").value;
    let url = `http://localhost:3000/gifs/${query}`
    let res = await axios.get(url)
    let results = document.getElementById("search-results")
    for(let gif of res.data){
         let img = document.createElement("img")
         img.src = gif
         results.append(img);
     }
}

const imgBtnListner = async () => {
    let query = document.getElementById("text").value;
    let url = `http://localhost:3000/images/${query}`


        let res = await axios.get(url)
        let results = document.getElementById("search-results")
        for(let images of res.data){
            let img = document.createElement("img")
            img.src = images
            results.append(img)
        }
    
}

// const renderImages = async () => {
//     console.log("button was clicked")
//     let searchQuery = document.getElementById("search").value;
//     const myUrl = `http://localhost:3000/images/${searchQuery}`;
//     const response = await axios.get(myUrl);
//     let results = document.getElementById("image-results");
//     console.log(response.data)
//     for(let image of response.data) {
//         let img = document.createElement("img")
//         img.src = image
//         results.append(img)
//     }