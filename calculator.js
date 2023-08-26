// Function to perform the calculation
function calculate() {
    var calculateButton = document.getElementById('calculateButton');
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var operatorSelect = document.getElementById('operator');
    var resultDiv = document.getElementById('result');
    
    // Event listener for the calculate button
    calculateButton.addEventListener('click', calculate);
    
    // Function to perform the calculation
    function calculate() {
        var num1 = parseFloat(num1Input.value);
        var num2 = parseFloat(num2Input.value);
        var operator = operatorSelect.value;
        var result;
    
        // Perform the calculation based on the operator
        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num1 / num2;
        } else {
            console.log('Invalid operator');
            return;
        }
    
        // Display the result
        resultDiv.innerText = 'Result: ' + result;
    }
    
    // Loop to add options to the operator select element
    var operators = ['+', '-', '*', '/'];
    for (var i = 0; i < operators.length; i++) {
        var option = document.createElement('option');
        option.value = operators[i];
        option.innerText = operators[i];
        operatorSelect.appendChild(option);
    }
}