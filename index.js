// Joseph P. Pasaoa
// Imagery Retriever
//

/* CUSTOM HELPERS */
const log = console.log;


/* POST DOM Load Execs */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#searchbutton').addEventListener('click', (e) => {
        e.preventDefault();
        console.dir(e.target);
        getAndDisplay();
    });
    document.querySelector('#searchbox').addEventListener('keydown', (e) => {        
        if (e.keyCode === 13) {
          e.preventDefault();
          getAndDisplay();
        }
    })
});

const getAndDisplay = async () => {
  const type = document.querySelector('input[name="imgtype"]:checked').value;
  const userInput = document.querySelector('#searchbox').value;
  if (userInput !== '') {
    let data = await linkWithServer(type, userInput);
    if (type === 'images') {
      displayAll(type, data.hits);
    } else {
      displayAll(type, data.data);
    }
  }
}

const linkWithServer = async (type, inputStr) => {
  let url = `http://localhost:9000/${type}?search=${inputStr}`;
  let results = await axios.get(url);
  log(results.data);
  return results.data;
}

const displayAll = (type, imgObjsArr) => {
  const stageDiv = document.querySelector('#right');
  for (let imgObj of imgObjsArr) {
    let newPost = document.createElement('a');
    let newImg = document.createElement('img');
    if (type === 'images') {
      newPost.href = imgObj.largeImageURL;
      newPost.setAttribute("target", "_blank");
      newImg.src = imgObj.webformatURL;
      newImg.setAttribute("alt", imgObj.tags);
    } else {
      newPost.href = imgObj.url;
      newPost.setAttribute("target", "_blank");
      newImg.src = imgObj.images.fixed_width_downsampled.url;
      newImg.setAttribute("alt", imgObj.title);
    }
    newPost.appendChild(newImg);
    stageDiv.insertBefore(newPost, stageDiv.firstChild);
  }
  resetInput();
}

const resetInput = () => {
  window.scrollTo(0,0);
  document.querySelector('#searchbox').value = '';
  document.querySelector('#searchbox').focus();
}