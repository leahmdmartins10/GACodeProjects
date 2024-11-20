
const formEl = document.querySelector('form');
const catListEl = document.querySelector('.cat-list');

window.onload = async function(){
    const response = await fetch('http://localhost:3000/cats');
    const cats = await response.json();
    console.log(cats);
    for(const cat of cats){
        const li = document.createElement('li');
        li.textContent = `${cat.name} is ${cat.color}`;
        catListEl.appendChild(li);
    }
}

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

    const liEl = document.createElement('li');
    liEl.textContent = `${data.name} is ${data.color}`;
    catListEl.appendChild(liEl);

    console.log(data);
})

catListEl.addEventListener('click', async function(evt){
    if(evt.target === catListEl){
        return;
    }

    const catName = evt.target.innerText

    const response = await fetch(`http://localhost:3000/cats/${catName}`, {

    console.log(evt.target);
})