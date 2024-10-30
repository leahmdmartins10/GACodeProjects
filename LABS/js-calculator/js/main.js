function append(value){
    document.getElementById('input').value += value;
}

function clearInput() {
    document.getElementById("input").value = "";
  }
  
  function calculate() {
    const currVal = document.getElementById("input").value;

    try {
        let newVal = eval(currVal); // Evaluate the input
        document.getElementById("input").value = newVal;
    } catch (error) {
        document.getElementById("input").value = "Error"; // Display an error message if eval fails
    }
}


// extra code: keyboard event listeners

document.addEventListener('keydown', function(event){
    const key = event.key;
    const validKeys = "0123456789+/*-"; // these are the allowed keys for the calculator

    if(validKeys.includes(key)){
        append(key);
    }else if(key === "Enter" || key === "="){
        calculate();
    }else if(key === "Escape"){
        clearInput();
    }
})