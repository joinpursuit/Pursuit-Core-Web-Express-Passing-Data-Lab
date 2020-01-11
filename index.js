document.addEventListener("DOMContentLoaded", () => {
  let mainDisplay = document.querySelector("#mainDisplay")
  let searchTerm = document.querySelector("#searchTerm")
  let gifSearch = document.querySelector("#gifSearch")
  let imgSearch = document.querySelector("#imgSearch")
  let ul = document.querySelector("ul")

  gifSearch.addEventListener("click", async (e) => {
    ul.innerHTML = ""
    let results = await axios.get(`http://localhost:3000/gifs?search=${searchTerm.value}`)
    debugger
    results.data.gifs.forEach((el) => {
      let li = document.createElement("li")
      let img = document.createElement("img")
      img.src = el.images.downsized_large.url
      li.appendChild(img)
      ul.appendChild(li)
    });
  })
   
  imgSearch.addEventListener("click", async (e) => {
    ul.innerHTML= ""
    let results = await axios.get(`http://localhost:3000/images?search=${searchTerm.value}`)
    results.data.images.forEach((el) => {
      let li = document.createElement("li")
      let img = document.createElement("img")
      img.src = el.webformatURL
      li.appendChild(img)
      ul.appendChild(li)
    });
   
  })
})