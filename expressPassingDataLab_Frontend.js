document.addEventListener('DOMContentLoaded', ()=>{

    let gifButton = document.querySelector('#gif');
    let imgButton = document.querySelector('#image');
    gifButton.addEventListener('click', (event)=>{
        event.preventDefault();
    })
    imgButton.addEventListener('click', (event)=>{
        event.preventDefault();
    })

})

const inputBox = document.querySelector('input');
const queryValue = inputBox.value;

const passingDataServer = 'http://localhost:4444'

const sendInfoToServer =  async ()=>{

    await axios(passingDataServer)
    .then((response)=>{
        console.log('hi')
        
    })
    .catch((error)=>{
        console.log('Error! 404')
    })

} 