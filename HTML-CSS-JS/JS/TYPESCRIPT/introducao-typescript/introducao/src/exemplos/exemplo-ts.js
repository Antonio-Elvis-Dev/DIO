"use strict";
let button1 = document.getElementById('button');
let input11 = document.getElementById('input1');
let input21 = document.getElementById('input2');
function soma(num1, num2, devePrintar, frase) {
    let result = num1 + num2;
    if (devePrintar) {
        console.log(frase + result);
    }
    return num1 + num2;
}
let devePrintar = true;
let frase = 'O valor é: ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(soma(Number(input11.value), Number(input21.value), devePrintar, frase));
        }
    });
}
