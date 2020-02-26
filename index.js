let getDataInput = document.querySelector("#getData");
let gifsInput = document.querySelector("#gifs");
let imagesInput = document.querySelector("#images");
let display = document.querySelector("#container");
let searchForm = document.querySelector("#searchForm");

gifsInput.addEventListener("click", async e => {
  e.preventDefault();
  let gifSearch = getDataInput.value;
  try {
    let req = await axios.get(`http://localhost:3000/gifs?q=${gifSearch}`);
    let gifsArray = req.data.gifs;
    gifsArray.forEach(gif => {
      let gifImage = document.createElement("img");
      gifImage.src = gif.images.downsized_large.url;
      display.appendChild(gifImage);
    });
  } catch (err) {
    console.log(err);
  }
});

imagesInput.addEventListener("click", async e => {
  e.preventDefault();
  let searchImage = getDataInput.value;
  try {
    let req = await axios.get(`http://localhost:3000/gifs?q=${searchImage}`);
    let imgSearch = req.data.gifs
    imgSearch.forEach(img => {
       let newImage = document.createElement("img");
       newImage.src = img.images.downsized_large.url
       display.appendChild(newImage);
    });
  } catch (err) {
    console.log(err);
  }
});
