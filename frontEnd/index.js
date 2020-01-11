document.addEventListener("DOMContentLoaded",()=>{
    let gif = document.querySelector("#gif");
    let images = document.querySelector("#images");
    let input = document.querySelector("input")
    let div = document.querySelector("div")

    gif.addEventListener("click", ()=>{
        let userInput = encodeURIComponent(input.value);
        input.value = "";
        div.innerHTML = ""
        axios.get(`http://localhost:3002/gifs?search=${userInput}`).then(res=>{
            let results = res.data;
            results.forEach(result =>{
                let img = document.createElement("img");
                img.src = result;
                div.appendChild(img);

            })
        })
    })

    images.addEventListener("click",()=>{
        let userInput = encodeURIComponent(input.value);
        input.value = ""
        div.innerHTML = ""
        axios.get(`http://localhost:3002/images?search=${userInput}`).then(res=>{
            let results = res.data;
            results.forEach(result =>{
                let img = document.createElement("img");
                img.src = result;
                div.appendChild(img);

            })
        })
    })

})