// let form = document.querySelector("form")
let input = document.querySelector("input")
let gif = document.querySelector("#gif")
let imageSearch = document.querySelector("#imageSearch")

gif.addEventListener("click", () => {
  let ul = document.querySelector("ul")
  ul.innerHTML = ""
  axios.get(`http://localhost:1000/gif/?search=${input.value}`).then(res => {
    //   debugger
    res.data.gifs.data.forEach(pics => {
      let img = document.createElement("img")
      img.src = pics.images.downsized.url
      ul.appendChild(img)
    })
  })
})

imageSearch.addEventListener("click", () => {
  let ul = document.querySelector("ul")
  ul.innerHTML = ""
  axios.get(`http://localhost:1000/images/?search=${input.value}`).then(res => {
    debugger
    res.data.images.hits.forEach(el => {
      let img2 = document.createElement("img")
      img2.src = el.largeImageURL
      ul.appendChild(img2)
    })
  })
})
