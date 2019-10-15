document.addEventListener('DOMContentLoaded', () => {
gifButtonListener();
imageButtonListener();
})

const gifButtonListener = () => {
    let gifButton = document.querySelector('#gif');
    gifButton.addEventListener('click', loadDataFromGifServer)

}

const imageButtonListener = () => {
const imageButton = document.querySelector('#image');
imageButton.addEventListener('click', loadDataFromImageServer)

}

async function loadDataFromGifServer() {
    let text = document.querySelector('#textbox').value;
    let results = document.querySelector('div');
results.innerText = '';
    const myURL = `http://localhost:1001/gif/?search=${text}`;
    const resp = await axios.get(myURL);
    console.log(resp.data)
 for(let i of resp.data){
     let image = document.createElement('img')
     image.src = i;
     results.append(image);
 }

}

async function loadDataFromImageServer() {
    let text = document.querySelector('#textbox').value;
    let results = document.querySelector('div');
    results.innerText = '';

    const myURL = `http://localhost:1001/images/?search=${text}`;
    const resp = await axios.get(myURL);
    console.log(resp.data)
    for(let i of resp.data){
        let image = document.createElement('img')
        image.src = i;
        results.append(image);
    }
}