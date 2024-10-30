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
