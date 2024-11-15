
const formEl = document.querySelector('form');

formEl.addEventListener('submit', async function(evt){
    evt.preventDefault();

    const newCat = {};
    newCat.name = evt.target.name.value;
    newCat.color = evt.target.color.value;
    newCat.lovesLasagna = evt.target.lovesLasagna.checked;

    const response = await fetch('http://localhost:3000/cats', {
        method: 'POST',
        body: newCat
    })

    const data = await response.json();

    console.log(data);
})