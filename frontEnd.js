const myURL = `http://localhost:8080/`

document.addEventListener('DOMContentLoaded', () => {
    let gifButton = document.querySelector('#gif');
    gifButton.addEventListener('click', clickGifSearch)

})


// const clickGifSearch = async (event) => {
//     let input = document.querySelector('input').value

//     let imgUrl = `${myURL}images?search=`
// }

const clickGifSearch = async () => {
    let input = document.querySelector('input').value;
    let gifUrl = `http://localhost:8000/gif?search=${input}`;

    const {
        data
    } = await axios.get(gifUrl)

    console.log(data);

}