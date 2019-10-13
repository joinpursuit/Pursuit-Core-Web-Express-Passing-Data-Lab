const imageCategory = 'fashion, nature, backgrounds, science, education, people, feelings, religion, health, places, animals, industry, food, computer, sports, transportation, travel, buildings, business, music'
let AllImageCategories = imageCategory.split(', ');
AllImageCategories = AllImageCategories.sort();

const imageType = ["all", "photo", "illustration", "vector"]

const AllGifCategories = ['G', 'PG', 'PG-13', 'R']
const gifType = ['GIF', 'Stickers'];


document.addEventListener("DOMContentLoaded", () => {
    let picContainer = document.querySelector('div');
    let form = document.querySelector('form');

    let search = document.querySelector('input');

    let selectServer = document.querySelector('#server');

    let selectType = document.querySelector('#type');
    fillTypeMenu(selectType, imageType);

    let selectCategory = document.querySelector('#category');
    fillCategoryMenu(selectCategory, AllImageCategories);
    
    selectServer.addEventListener('change', () => {
        let selectedAPI = selectServer.value;
        let typeArray;
        let categoryArray;

        if (selectedAPI === 'Images') {
            categoryArray = AllImageCategories;
            typeArray = imageType;
        } else {
            categoryArray = AllGifCategories;
            typeArray = gifType;
        }

        fillTypeMenu(selectType, typeArray);
        fillCategoryMenu(selectCategory, categoryArray)
    })

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        let selectedAPI = selectServer.value;

        let searchInput = search.value;
        searchInput =  searchInput.replace(' ', '+');
        
        if (selectedAPI === 'Images') {
            let searchCategory = selectCategory.value;
            let searchType = selectType.value;

            let endPoint = `?q=${searchInput}&per_page=200&image_type=${searchType}`;
            if (searchCategory !== "--- Select a Category ---"){
                endPoint += `&category=${searchCategory}`
            }
            console.log(endPoint)
            let response = await axios.get(`http://localhost:3000/${selectedAPI}/${endPoint}`)
            
            displayImagesResults(picContainer, response.data);
        
        } else {
            if (!searchInput) {
                picContainer.innerText = "Please enter a search value for this part to work";
            } else {
                let subServer = selectType.value;
                let rating = selectCategory.value;
                let endPoint = `?q=${searchInput}&limit=200`
                if (rating !== "--- Select a Category ---") {
                    endPoint += `&rating=${rating}`
                }
                console.log(endPoint)
                let response = await axios.get(`http://localhost:3000/${subServer}/${endPoint}`)
                console.log(response.data.data);
                displayGifResults(picContainer, response.data.data);
            }
        }

    })

    picContainer.addEventListener("click", (event) => {
        if (event.target.parentNode === picContainer) {
            let image = document.createElement('img');
            image.src = event.target.id
            picContainer.innerText = '';
            picContainer.className = 'singleImage'
            picContainer.appendChild(image);
        }
    })

})

const fillTypeMenu = (parent, array) => {
    parent.innerText = '';
    for (let element of array) {
        let option = document.createElement('option');
        option.value = element;
        option.innerText = element;
        parent.appendChild(option);
    }
}

const fillCategoryMenu = (parent, array) => {
    parent.innerHTML = `<option>--- Select a Category ---</option>`;
    for (let element of array) {
        let option = document.createElement('option');
        option.value = element;
        option.innerText = element;
        parent.appendChild(option);
    }
}

const displayImagesResults = (parent, data) => {
    parent.innerText = '';
    parent.className = 'searchResult';

    if (data.hits.length) {
        for (let picture of data.hits) {
            let image = document.createElement('img');
            image.src = picture.previewURL;
            image.id = picture.largeImageURL;
            image.alt = picture.tags;
    
            parent.appendChild(image)
        }
    } else {
        parent.innerText = 'Sorry, no matches to your research in our database';
    }
}

const displayGifResults = (parent, data) => {
    parent.innerText = '';
    parent.className = 'searchResult';

    for (let picture of data) {
        let image = document.createElement('img');
        image.src = picture.images.fixed_width_downsampled.url;
        image.id = picture.images.downsized_large.url;
        // image.alt = picture.tags;

        parent.appendChild(image)
    }
}