
function getContent(type) {

  const word = document.querySelector('input').value
  axios.get(`http://localhost:8080/${type}?search=${word}`)
    .then(data => {
      display(data.data)
    })
    .catch(err => {
      console.log(err)
    })
}

function display(data) {
  let div = document.querySelector('#contain')
  while (div.firstChild) {
    div.removeChild(div.firstChild)
  }
  for (let i = 0; i < data.body.length; i++) {
    let img = document.createElement('img')
    img.src = data.body[i].image
    div.appendChild(img)
  }
  document.querySelector('input').value = ""
}