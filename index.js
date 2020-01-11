// let form = document.querySelector("form")
let input = document.querySelector("input")
let gif = document.querySelector("#gif")
let imageSearch = document.querySelector("#imageSearch")

gif.addEventListener("click", () => {
  axios.get("http://localhost:1000/gif/?search=spongebob").then(res => {
    debugger
  })
})
