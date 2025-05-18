// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite sua idade: "));

process.stdout.write("Pela sua idade, você é ")
if (idade < 0) {
  console.log("Idade inválida.");
} else if (idade < 12) {
  console.log("uma criança.");
} else if (idade < 18) {
  console.log("um adolescente.");
} else if (idade < 60) {
  console.log("um adulto.");
} else {
  console.log("um idoso.");
}