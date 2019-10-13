document.addEventListener('DOMContentLoaded', ()=>{

    let gifButton = document.querySelector('#gif');
    let imgButton = document.querySelector('#image');
    gifButton.addEventListener('click', (event)=>{
        event.preventDefault();
        displayGif();
    })
    imgButton.addEventListener('click', (event)=>{
        event.preventDefault();
        displayImg();
    })

})


const displayGif = async () =>{
    const queryValue = document.querySelector('input').value;
    const dataServer = `http://localhost:4444/gifs?search=${queryValue}`

    await axios
            .get(dataServer)
            .then((response)=>{
                let result = response.data
                console.log(result)
            })
            .catch((error)=>{
                console.log('Error!')
            })
}

const displayImg = async () =>{
    const queryValue = document.querySelector('input').value;
    const dataServer = `http://localhost:4444/images?search=${queryValue}`

    await axios
            .get(dataServer)
            .then((response)=>{
                let result = response.data
                console.log(result)
            })
            .catch((error)=>{
                console.log('Error!')
            })
}

const displayContent = () =>{
    let contentDiv = document.createElement('div');
    let content = document.createElement('img');
    content.src = "";

    document.appendChild(contentDiv);
    contentDiv.appendChild(content);

}