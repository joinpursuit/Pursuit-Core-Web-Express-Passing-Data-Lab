//If they press one button they make an axios call to get a giphy if they hit the other button they get an image

let url = 'http://localhost:4000/'
document.addEventListener('DOMContentLoaded', () => {
   let giphyButton = document.querySelector('#giphy') 
//    giphyButton.addEventListener('click', displayGiphy)
//    imageButton.addEventListener('click', displayImage)
})
const fetchGiphy = () => {
    axios.get(url)
    .then((response) => {
        let data = response.data.data
        for (i = 0; i < data.length; i++) {
            console.log(data[i])
        }  
    })
    .catch((err) => {
        console.log('Error', err)
    })
}


// fetchGiphy()