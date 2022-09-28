const aInput = document.querySelector('#a');
const bInput = document.querySelector('#b');
const sumBtn = document.querySelector('#sumBtn');
const minBtn = document.querySelector('#minBtn');
const multBtn = document.querySelector('#multBtn');
const divideBtn = document.querySelector('#divideBtn');
const result = document.querySelector('#result');

const sum = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    result.textContent = a + b;
}

const min = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    result.textContent = a - b;
}

const multiply = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    result.textContent = a * b;
}

const divide = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);

    if (b == 0) {
        document.getElementById("result").innerHTML = 'На ноль делить нельзя';
        return;
    }

    result.textContent = a / b;
}


sumBtn.onclick = sum;
minBtn.onclick = min;
multBtn.onclick = multiply;
divideBtn.onclick = divide;


