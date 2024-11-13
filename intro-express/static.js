
console.log('This is static JS');

document.querySelector('button').addEventListener('click', async function() {
    const response = await fetch(`http://localhost:3000/towns`, {method: 'POST'})
    const data = await response.json()
    console.log(data)
})

function sayHello(name){
    console.log(`Hello ${name}`);
}

sayHello('Lee');