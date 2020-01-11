
document.addEventListener("DOMContentLoaded",()=>{
    let searchinput=document.querySelector("#searchinput")
    let display=document.querySelector("#display")

    let input = document.createElement("input")
    input.placeholder = "search images"

    searchinput.appendChild(input) 
    let gifbutton = document.createElement("button")
    gifbutton.innerText = "Gif Search"
    let imageButton = document.createElement("button")
    imageButton.innerText = "image search"
    searchinput.appendChild(gifbutton)
    searchinput.appendChild(imageButton)
    
    
    const gifSearch = async ()=>{
        try{
            let url = await axios.get(`http://localhost:3000/gif/${input.value}`)
            // console.log(url)
            let images = url.data
          images.forEach((el)=>{
            let img = document.createElement("img")
            img.src = el
            display.appendChild(img)
          })
        }catch(err){
            console.log(err)
        }
    }

    const imgSearch =async()=>{
        try{
            let url = await axios.get(`http://localhost:3000/image/${input.value}`)
            let images = url.data
            images.forEach((el)=>{
                let img = document.createElement("img")
                img.src = el
                display.appendChild(img)
              })
        }catch(err){
            console.log(err)
        }
    }
    
gifbutton.addEventListener("click",(gifSearch))
imageButton.addEventListener("click",(imgSearch))
})