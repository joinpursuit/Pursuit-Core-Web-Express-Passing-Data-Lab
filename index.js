document.addEventListener('DOMContentLoaded', () =>{
    getGifBtn().addEventListener('click', loadDataFromServer)
})

function getGifBtn() {
    return document.querySelector("#gif")
}

async function loadDataFromServer() {
    let userInput = document.querySelector("#user-input").value
    userInput = encodeURIComponent(userInput)
    const myURL = `http://localhost:3000/gifs/${userInput}`
    const resp = await axios.get(myURL)    
    // displayDataFromServer(resp.data)
    console.log("index.js response: ", resp)
}

function displayDataFromServer(data) {
    console.log(data)

    
}
