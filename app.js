'use strict'

const firstNumInput = document.querySelector('.first_number');
const op = document.querySelector('.op_input');
const secondNumInput = document.querySelector('.second_number');
const calculateBtn = document.querySelector('.calculate-btn');

const calc_result_value = document.querySelector('.result');

let result;

function showMessage(elem, txt, category) {
    document.getElementById(elem).innerHTML = txt;
    document.getElementById(elem).classList.add(category);
}

function clearMessage(elem, txt, category) {
    document.getElementById(elem).innerHTML = txt;
    document.getElementById(elem).classList.remove(category);
}

function calculate() {

    const firstNum = parseFloat(firstNumInput.value);
    const secondNum = parseFloat(secondNumInput.value);

    if (op.value === '+') {
        result = Math.floor(firstNum + secondNum);
        calc_result_value.innerHTML = `RESULT: ${result}`;
    } else if (op.value === '-') {
        result = Math.floor(firstNum - secondNum);
        calc_result_value.innerHTML = `RESULT: ${result}`;
    } else if (op.value === '*') {
        result = Math.floor(firstNum * secondNum);
        calc_result_value.innerHTML = `RESULT: ${result}`;
    } else if (op.value === '/') {
        result = Math.floor(firstNum / secondNum);
        calc_result_value.innerHTML = `RESULT: ${result}`;
    } else {
        setTimeout(() => {
            showMessage('result-val', 'Please enter a valid operator!', 'err-message');
        }, 500);
        // remove after 3 secondes
        setTimeout(() => {
            clearMessage('result-val', '', 'err-message');
        }, 3000);
    }
}

function validate_and_if_not_err_show_result() {
    if (firstNumInput.value === '' || op.value === '' || secondNumInput.value === '') {
        setTimeout(() => {
            showMessage('result-val', 'all fields are required!', 'err-message');
        }, 500);
        // remove after 3 seconds
        setTimeout(() => {
            clearMessage('result-val', '', 'err-message');
        }, 3000);
    } else {
        calculate();
    }
}

function clearFields() {
    firstNumInput.value = '';
    op.value = '';
    secondNumInput.value = '';
}

calculateBtn.addEventListener('click', () => {
    validate_and_if_not_err_show_result();
    clearFields();
});