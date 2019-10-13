
addEventListener("DOMContentLoaded", () =>{
    let button1 = document.getElementById("images").value;
    button1.addEventListener('click', fetchServerData);
    let button2 = document.querySelector("#button2").value;
    button2.addEventListener('click', fetchServerData2)
})
const setupButtonListener = () =>{
    const loadPics = document.querySelector("form")
    loadPics.addEventListener("submit",fetchServerData)
}
function fetchServerData(event){
    event.preventDefault();
    
    // let search = document.querySelector("#search").value;
    let url =`http://localhost:5004/${search}/${button1}/${button2}`
const stillImage = loadPics().value
if(!stillImage) { return}
const response = await  Axios.get(`http://localhost:5004/images?seach=${search}`)
return response.data

}
function fetchServerData2(event){
    event.preventDefault();
    const gifImage = loadPics().value
    if(!gifImage){return}
    const response = await Axios.get(`http://localhost:5004/=gif?search=${search}` )
}
