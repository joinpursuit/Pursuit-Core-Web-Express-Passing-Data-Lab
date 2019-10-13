const imageCategory = 'fashion, nature, backgrounds, science, education, people, feelings, religion, health, places, animals, industry, food, computer, sports, transportation, travel, buildings, business, music'
let AllImageCategories = imageCategory.split(', ');
AllImageCategories = AllImageCategories.sort();

const imageType = ["all", "photo", "illustration", "vector"]

const gifCategory = ''
let AllGifCategories = gifCategory.split(', ');
AllGifCategories = AllGifCategories.sort();

const gifType = [];


document.addEventListener("DOMContentLoaded", () => {
    let picContainer = document.querySelector('div');
    let form = document.querySelector('form');

    let search = document.querySelector('input');

    let serverSelector = document.querySelector('#server');
    let selectedAPI = serverSelector.value;

    let selectType = document.querySelector('#type');
    fillTypeMenu(selectType, imageType);

    let categorySelector = document.querySelector('#category');
    fillCategoryMenu(categorySelector, AllImageCategories);
    
    serverSelector.addEventListener('change', () => {
        let typeArray;
        let categoryArray;

        if (selectedAPI === 'Image Search') {
            categoryArray = AllImageCategories;
            typeArray = imageType;
        } else {
            categoryArray = AllGifCategories;
            typeArray = gifType;
        }

        fillTypeMenu(selectType, typeArray);
        fillCategoryMenu(categorySelector, categoryArray)
    })

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        let selectedAPI = serverSelector.value;

        let searchInput = search.value;
        searchInput =  searchInput.replace(' ', '+');
        

        if (selectedAPI === 'Images') {
            let searchCategory = categorySelector.value;
            let searchType = selectType.value;

            let endPoint = `&q=${searchInput}&per_page=200&image_type=${searchType}`;
            if (searchCategory !== "--- Select a Category ---"){
                endPoint += `&category=${searchCategory}`
            }
            
            let response = await axios.get(`http://localhost:3000/${selectedAPI}/${endPoint}`)
            
            displayImagesResults(picContainer, response.data);
        
        } else {
            if (!searchInput) {
                picContainer.innerText = "Please enter a search value for this part to work";
            } else {
                let endPoint = `&q=${searchInput}&limit=200&rating=PG-13`
                let response = await axios.get(`http://localhost:3000/${selectedAPI}/${endPoint}`)
                console.log(response.data.data);
                displayGifResults(picContainer, response.data.data);
            }
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

    for (let picture of data) {
        let image = document.createElement('img');
        image.src = picture.images.fixed_width_downsampled.url;
        // image.id = picture.largeImageURL;
        // image.alt = picture.tags;

        parent.appendChild(image)
    }
}