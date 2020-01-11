
document.addEventListener("DOMContentLoaded",()=>{
    //loadImages();
    loadGifs();
})

const loadGifs = async() =>{
    let button = document.querySelector("#gifSearch");
    let div = document.querySelector("div");
    console.log(button)
    button.addEventListener("click",(e) => {
        //https://api.giphy.com/v1/gifs/search?api_key= ${api_key} ${request.query.search}&limit=&offset=0&rating=PG&lang=en
        axios.get("http://localhost:3000/gifs/search?q=").then(response =>{
            let ul = document.querySelector("ul");
            response.data.forEach(image => {
                debugger
                let li = document.createElement("li");
                // li.innerText = image.
                
            });
        })
    })
}

// const loadImages = async() =>{
//     let button = document.querySelector("#imageSearch");
//     let div = document.querySelector("div");
//     button.addEventListener("click",(e) => {
//         axios.get("http://localhost:3000/images/?search=").then(response =>{
//             let ul = document.querySelector("ul");
//             response.data.forEach(image => {
//                 debugger
//                 let li = document.createElement("li");
//                 // li.innerText = image.
                
//             });
//         })
//     })
// }