const getGifs = () => {
  let input = document.querySelector('input')
  let value = input.value.split(' ').join('+')
  let div = document.querySelector('div')
  div.innerText = ''
  let url = `http://localhost:5050/gif/?search=${value}`
  axios.get(url)
  .then(response => {
    response.data.forEach(a => {
      let img = document.createElement('img')
      img.src = a
      div.appendChild(img)
    })
  })
}

const getImgs = () => {
  let input = document.querySelector('input')
  let value = input.value.split(' ').join('+')
  let div = document.querySelector('div')
  div.innerText = ''
  let url = `http://localhost:5050/images/?search=${value}`
  axios.get(url)
  .then(response => {
    response.data.forEach(a => {
      let img = document.createElement('img')
      img.src = a
      div.appendChild(img)
    })
  })
}
