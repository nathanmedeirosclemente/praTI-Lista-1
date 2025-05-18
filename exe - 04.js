// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log("Escolha uma opção:");
console.log("1 - Dizer olá");
console.log("2 - Solo de guitarra");
console.log("3 - Contar uma piada");

let opcao = prompt("Digite o número da opção: ");

switch (opcao) {
  case '1':
    console.log("Olá, pessoa!");
    break;
  case '2':
    console.log("Turununun nununãhhhhhhhh Pewn Wewn Wewnwewn wahn");
    break;
  case '3':
    console.log("Saindo... Até mais!");
    break;
  default:
    console.log("Por que o livro foi ao médico? Porque ele tinha muitas páginas em branco!");
}