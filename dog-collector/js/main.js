// Select the necessary elements from the DOM
const button = document.querySelector('button');
const breedSelect = document.querySelector('select');
const imageDiv = document.querySelector('div');

// Load the breed list when the window loads
window.onload = getBreeds;

// Add a click event listener to the button
button.addEventListener('click', async function() {
    // Get the selected breed from the dropdown
    let breed = breedSelect.value;
    // Construct the URL for fetching a random dog image of the selected breed
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    console.log(url);

    // Fetch the random dog image
    let response = await fetch(url);
    const dogPic = await response.json();

    // Display the fetched image in the imageDiv
    imageDiv.innerHTML = `<img src="${dogPic.message}">`;
})

// Function to fetch and populate the breed list
async function getBreeds(){
    // Fetch the list of all breeds
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    const breeds = Object.keys(data.message);

    // Populate the dropdown with breed options
    breeds.forEach((breed) => {
        const option = document.createElement('option');
        option.value = breed;
        option.innerText = breed;
        breedSelect.appendChild(option);
    })
}
