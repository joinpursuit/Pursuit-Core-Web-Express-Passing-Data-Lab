document.addEventListener("DOMContentLoaded", () => {

    let container = document.querySelector("#container");
    let userInput = document.querySelector("#searchBar");
    let gifSearch = document.querySelector("#gifSearch");
    let imgSearch = document.querySelector("#imgSearch");

    gifSearch.addEventListener("click", () => {
        container.innerHTML = "";
        axios.get(`http://localhost:3000/gif/?search=${userInput.value}`).then(res => {
            let data = res.data.gifs;
            debugger
            data.forEach(gif => {
                let img = document.createElement('img');
                img.src = gif.images.downsized.url;
                container.appendChild(img);
            })
        })
    })

    imgSearch.addEventListener("click", () => {
        container.innerHTML = "";
        axios.get(`http://localhost:3000/image/?search=${userInput.value}`).then(res => {
            let data = res.data.images.hits;
            data.forEach(image => {
                let img = document.createElement('img');
                img.src = image.webformatURL;
                container.appendChild(img);
            })
        })
    })


})