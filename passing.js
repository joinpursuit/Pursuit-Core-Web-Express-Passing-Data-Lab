addEventListener("DOMContentLoaded", () =>{
    console.log("content loaded")
    setupButtonListener()
})
const setupButtonListener = () =>{
    const loadPics = document.querySelector("form")
    loadPics.addEventListener("submit",fetchServerData)
}
function fetchServerData(event){
    event.preventDefault();
    
    let search = document.querySelector("#search").value;
    let button1 = document.querySelector("#button1").value;
    let button2 = document.querySelector("#button2").value;

    let url =`http://localhost:5004/${search}/${button1}/${button2}`
    fetch(url).then(response=>{
        return response.json()
    }).then(total=>{
        let images = document.querySelector("#images")
        images.innerText = `${total.answer}`
    })
}