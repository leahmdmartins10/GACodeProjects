document.querySelector('button').addEventListener('click', async function() {
    const response = await fetch(/* ??? */)
    const data = await response.json()
    console.log(data)
})
