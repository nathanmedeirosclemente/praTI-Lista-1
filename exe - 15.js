// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let a = 1, b = 1;

console.log(a); // 1
console.log(b); // 1

for (let i = 2; i < 10; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}