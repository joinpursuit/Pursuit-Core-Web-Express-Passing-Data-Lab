
document.addEventListener("DOMContentLoaded",()=>{

    let input = document.createElement("input")
    input.placeholder = "search images"

    document.body.appendChild(input) 
    let gifbutton = document.createElement("button")
    gifbutton.innerText = "Gif Search"
    let imageButton = document.createElement("button")
    imageButton.innerText = "image search"
    document.body.appendChild(gifbutton)
    document.body.appendChild(imageButton)
    
    
    const gifSearch = async ()=>{
       
        try{
            let url = await axios.get(`http://localhost:3000/gif/${input.value}`)
            console.log(url)
            let images = url.data
debugger;
          images.forEach((el)=>{
            let ul = document.createElement("ul") 
            let li = document.createElement("li") 
            let img = document.createElement("img")
            img.src = el
            li.appendChild(img)
            ul.appendChild(li)
            document.body.appendChild(ul)




          })
console.log(url)


        }catch(err){
            console.log(err)
        }







}

gifbutton.addEventListener("click",(gifSearch))
})