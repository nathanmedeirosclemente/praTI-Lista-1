// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let count = 0;
let num;

do {
    num = parseFloat(prompt("Digite um número decimal (0 para sair): "));
    if (num !== 0) {
        soma += num;
        count++;
    }
} while (num !== 0);

if (count > 0) {
    console.log(`Média: ${(soma / count).toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}
