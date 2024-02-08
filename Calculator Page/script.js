const input = document.getElementById('display');

function insertToDisplay(i) {
    input.value += i;
}

function erase() {
    input.value = input.value.slice(0, input.value.length-1);
}

function eraseAll() {
    input.value = "";
}

function calculate() {
    try {
        input.value = eval(input.value);
    }
    catch(error) {
        input.value = "Error";
    }
}