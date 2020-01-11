document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector("input").value
    const getGifs = () => {
    
        let gif  = document.querySelector(".gif")
        // let img  = document.querySelector("#img")
        gif.addEventListener('click',(e) => {
            e.preventDefault()
        
            let gifURL = axios.get("http://localhost:3000/gifSearch")
            console.log(gifURL);

            debugger
                console.log(gifURL);
                

        })

    }
    const getImg = () => {
        let img  = document.querySelector("#img")
        img.addEventListener('click',(e) => {
            e.preventDefault()
            let imgURL = axios.get("http://localhost:3000/imageSearch")
        })
    }
})