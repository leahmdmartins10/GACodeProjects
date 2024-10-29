
const titleEl = document.getElementById('title')
const pEl = document.querySelector('p.cool')


console.log(titleEl.innerText)
titleEl.innerText = 'Intro to DOM'

pEl.innerHTML = '<i>TO DO LIST</i>'


titleEl.style.textAlign = 'center'