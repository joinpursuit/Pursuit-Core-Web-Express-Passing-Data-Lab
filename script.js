document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let dataType = document.querySelector('input:checked').value
        addToDOM(dataType);
    })
})

const addToDOM = async (dataType) => {
    let search = document.querySelector('input').value;
    let display = document.querySelector('div')
    let data = await fetch(`http://localhost:3000/${dataType}?search=` + search).then(r => r.json())
    console.log(data)
    while (display.firstChild) display.removeChild(display.firstChild)
    data.forEach(link => {
        let img = document.createElement('img')
        img.src = link;
        display.appendChild(img)
    });
}
