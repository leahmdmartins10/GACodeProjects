
// we select elements with an id using document.getElementById
const titleEl = document.getElementById('title')

// we select the first paragraph element with the class cool
const pEl = document.querySelector('p.cool')


//console.log(titleEl.innerText)
titleEl.innerText = 'Intro to DOM'

pEl.innerHTML = '<i>TO DO LIST</i>'


titleEl.style.textAlign = 'center'

pEl.style.color = 'blue'

// access or modify the attributes of an element
// console.log(titleEl.getAttribute('class'))

pEl.setAttribute('id', 'paragraph')
// console.log(pEl.id);

pEl.id = "whatever"

const aEl = document.querySelector('a');

aEl.setAttribute('href', 'https://google.com')

function toggleClass(className){
    pEl.classList.toggle(className);
}

// selecting Multiple elements
const commentEls = document.querySelectorAll('ul#comments > li');

console.log(commentEls[0]);

commentEls.forEach(comment => console.log(comment))

for(let commentEl of commentEls){
    if(commentEl.innerText.includes('2')){
        console.log('Time to stop');
        break;
    }
}

