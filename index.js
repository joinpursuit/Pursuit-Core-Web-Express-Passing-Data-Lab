document.addEventListener("DOMContentLoaded", () => {

    let container = document.querySelector("#container");
    let userInput = document.querySelector("#searchBar");
    let gifSearch = document.querySelector("#gifSearch");
    let imgSearch = document.querySelector("#imgSearch");

    gifSearch.addEventListener("click", () => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=EuNi39MeeBPzJPWLqTWVYXxSFFgecZqB&q=${userInput.value}&limit=25&offset=0&rating=PG-13&lang=en`).then(res => {
            let data = res.data.data;
            data.forEach(gif => {
                let img = document.createElement('img');
                img.src = gif.url;
                container.appendChild(img);
            })
        })
    })

    imgSearch.addEventListener("click", () => {
        debugger
    })


})