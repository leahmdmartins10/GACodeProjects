
// defines all of the variables on the site
const button = document.querySelector('button');
const breedInput = document.querySelector('input');
const imageDiv = document.querySelector('div');

window.onload = getBreeds;

// adds an event listener for the button click
button.addEventListener('click', async function() {
    let breed = breedInput.value.toLowerCase();
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    console.log(url);

    let response = await fetch(url);
    const dogPic = await response.json();

    imageDiv.innerHTML = `<img src="${dogPic.message}">`;

})

async function getBreeds(){
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();

    const breeds = Object.keys(data.message);
    console.log(breeds);

}