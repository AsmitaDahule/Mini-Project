alert ("Welcome to calculator");
// Function to add characters to the display
function addToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function clear1(){
    let display=document.getElementById('display');
    display.value=display.value.slice(0,-1);
}
  
  // Function to evaluate the expression and display result
  function calculate() {
    let display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  // Show welcome message animation
  document.addEventListener('DOMContentLoaded', function() {
    const calculator = document.querySelector('.calculator');
    calculator.classList.add('show-welcome');
    setTimeout(function() {
      calculator.classList.remove('show-welcome');
    }, 3000); // Remove after 3 seconds
  });
  