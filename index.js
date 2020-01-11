document.addEventListener("DOMContentLoaded", () => {
    console.log("hi")
    let gifSearch = document.querySelector("#gifSearch")
    let imageSearch = document.querySelector("#imageSearch")
    let input = document.querySelector("input")
    let div = document.querySelector("#pictures")

    const loadImage = async (url) =>{
        div.innerHTML=""
        try{
            data = await axios.get(url)
            data.data.forEach( el =>{
                let image = document.createElement("img")
                image.src = el
                div.appendChild(image)
            })

        } catch (err){
            console.log(err)
        }
    }

    imageSearch.addEventListener("click", (e)=>{

        e.preventDefault()
        let imageUrl = `http://localhost:3000/images/?search=${input.value}`
        loadImage(imageUrl)
    })
    
    gifSearch.addEventListener("click", (e)=>{
        e.preventDefault()
        let imageUrl = `http://localhost:3000/gif/?search=${input.value}`
        loadImage(imageUrl)
    })



})