function appendValue(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function calculate() {
    let screen = document.getElementById("screen");

    screen.value = eval(screen.value);
}