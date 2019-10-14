

document.addEventListener("DOMContentLoaded",()=>{
    console.log("content loaded");
    let gifBtn = document.getElementById("gifs")
    gifBtn.addEventListener("click",gifBtnListner);
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