
addEventListener("DOMContentLoaded", () => {

    let button1 = document.querySelector("#gifSearch")
    button1.addEventListener('click', loadGifs);
    let button2 = document.querySelector("#imageSearch")
    button2.addEventListener('click', loadImages);
})

const loadGifs = async () => {
    //imagesDiv.innerHTML =""
    let input = document.querySelector("#search")
    // debugger
    try {
        let imagesDiv = document.querySelector("#imagesDiv")

        let response = await axios.get(`http://localhost:3000/gif/${input.value}`)
            let results = response.data
            console.log(results)
            for (let gif of results) {
                let img = document.createElement("img")
                let gifImage = gif
                img.src = gifImage
                imagesDiv.append(img)
                debugger
            }
    }catch(err) {
        console.log(err);

    }
}

const loadImages = async () => {
    imagesDiv.innerHTML =""
    try {
        let input = document.querySelector("input")
        let imagesDiv = document.querySelector("imageDiv")
        let response = await axios.get(`http://localhost:3000/image/${input.value}`)
        let gifs = response.data;
        gifs.forEach(gif => {
            let img = document.createElement("img")
            img.src = gif
            imagesDiv.appendChild(img)
        })
    } catch (err) {
        console.log(err)
    }

}
