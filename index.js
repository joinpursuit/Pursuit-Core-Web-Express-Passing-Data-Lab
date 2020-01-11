document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector("input");
    let gifSearch = document.querySelector("#gifSearch");
    let imageSearch = document.querySelector("#imageSearch");
    let ul = document.querySelector("ul");
    let search = document.querySelector("#searchResults");

    gifSearch.addEventListener("click", async (e) => {
        ul.innerHTML = "";
        let results = await axios.get(`http://localhost:3000/gifs?search=${input.value}`);
        results.data.gifs.forEach((el) => {
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = el.images.downsized_large.url;
            li.appendChild(img);
            ul.appendChild(li);
            search.appendChild(ul);
        })
    })

    imageSearch.addEventListener("click", async (e) => {
        ul.innerHTML = "";
        let results = await axios.get(`http://localhost:3000/images?search=${input.value}`);
        results.data.images.forEach((el) => {
            let li = document.createElement("li");
            let img = document.createElement('img');
            img.src = el.webformatURL;
            li.appendChild(img);
            ul.appendChild(li);
            search.appendChild(ul);
        })
    })
})