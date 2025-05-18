// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));
let fatorial = 1;

if (num < 0) {
    console.log("Fatorial não existe para números negativos.");
} else {
    for (; num > 1; num--) {
        fatorial *= num;
    }
    console.log(`Fatorial de ${num} é ${fatorial}`);
}
