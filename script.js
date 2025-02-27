const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
function appendScientificFunction(func) {
    display.value += func + '(';
}

function appendScientificFunction(func) {
    display.value += func + '(';
}

function calculateResult() {
    try {
        let result = display.value
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/log/g, 'Math.log')
            .replace(/sqrt/g, 'Math.sqrt');

        display.value = eval(result);
    } catch (error) {
        display.value = "Error";
    }
}


