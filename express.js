document.addEventListener('DOMContentLoaded', () => {
    getImageBtn()
    getGifBtn()
})


const getImageBtn = () => {

   let imageBtn= document.querySelector("#image")
   imageBtn.addEventListener('click', loadDataFromServer)
}

const getGifBtn = () => {
    let gifBtn = document.querySelector("#gif")
    gifBtn.addEventListener('click', loadDataFromServer)
}

async function loadDataFromServer() {
    let searchInput = document.querySelector('#search-value').value
    const myURL = `http://localhost:4000/gif${searchInput}`
    const res = await axios.get(myURL)
    console.log(res.data)
   // displayDataFromServer(res.data)
}

