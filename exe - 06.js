// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

let A = parseFloat(prompt("Lado A: "));
let B = parseFloat(prompt("Lado B: "));
let C = parseFloat(prompt("Lado C: "));

if (A + B > C && A + C > B && B + C > A) {
  if (A === B && B === C) {
    console.log("É um triângulo Equilátero");
  } else if (A === B || B === C || A === C) {
    console.log("É um triângulo Isósceles");
  } else {
    console.log("É um triângulo Escaleno");
  }
} else {
  console.log("Não forma um triângulo");
}
