document.addEventListener("DOMContentLoaded", () => {
    let searchInput = document.querySelector("#searchInput");
    let gifButton = document.querySelector("#gifSearch");
    let imgButton = document.querySelector("#imgSearch");
    let resultDiv = document.querySelector("#content");
    console.log("DOM loaded");
    //This will set up the data
    gifButton.addEventListener("click", async () => {
        let inputValue = searchInput.value + "";
        let mainURL = "http://localhost:3001/gif";
        let finalURL = `${mainURL}/?search=${inputValue}`;
        let returnResult = await fetchData(finalURL);
        console.log(returnResult);
        resultDiv.innerHTML = "";
        for(let i = 0; i < returnResult.length; i++) {
            let newImg = document.createElement("img");
            console.log(returnResult[i].images.downsized.url)
            newImg.src = returnResult[i].images.downsized.url; 
            resultDiv.appendChild(newImg);
        }
    });

    imgButton.addEventListener("click", async () => {
        let inputValue = searchInput.value + "";
        let mainURL = "http://localhost:3001/images";
        let finalURL = `${mainURL}/?search=${inputValue}`;
        let returnResult = await fetchImageData(finalURL);
        //console.log(returnResult);
        resultDiv.innerHTML = "";
        for(let i = 0; i < 5; i++) {
            let newImg = document.createElement("img");
            console.log(returnResult)
            newImg.src = returnResult.hits[i].previewURL; 
            resultDiv.appendChild(newImg);
        }
    });

});


//This will set the result
const fetchData = async (finalURL) => {
    console.log("fetchData started");
    let response = await axios.get(finalURL)
    
    .catch(error => {
        console.log('error:', error);
    })
    // console.log(response.data.data);
    return response.data.data;
}

const fetchImageData = async (finalURL) => {
    console.log("fetchData started");
    let response = await axios.get(finalURL)
    
    .catch(error => {
        console.log('error:', error);
    })
    // console.log(response.data.data);
    return response.data;
}