//If they press one button they make an axios call to get a giphy if they hit the other button they get an image

document.addEventListener('DOMContentLoaded', () => {
   const giphyButton = document.querySelector('#giphy') 
   const imageButton = document.querySelector('#image')

   giphyButton.addEventListener('click', () => fetchUrl('gif'))
   imageButton.addEventListener('click', () => fetchUrl('image'))
})
const fetchUrl = async (route) => {
    const inputVal = document.querySelector('#search').value

    let url = `http://localhost:4000/${route}/?search=${inputVal}`
    let response = await axios.get(url)
    
    let mediaArray = response.data
    let mediaElem = mediaArray[randomIndex(mediaArray)]
    displayMedia(mediaElem)
}

const randomIndex = (arr) => {
     const randomNum = Math.floor(Math.random() * arr.length)
     return randomNum
}

const displayMedia = (media) => {
    const display = document.querySelector('#display')
    const createMedia = document.createElement('img')

    if(display.innerHTML === ''){
        createMedia.src = media
        display.append(createMedia)
    } else {
        display.innerHTML = ''
        createMedia.src = media
        display.append(createMedia)
    }
    
}
