// Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

/* 
//Quando conferi o enunciado novamente, depois de pronto o programa, percebi que não 
//se aplicava ao que foi pedido, mas deixarei meu trabalho aqui mesmo assim:
for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        console.log(`${i} elefante incomoda muita gente!`);
    } else if (i % 2 != 0) {
        console.log(`${i} elefantes incomodam muita gente!`);
    } else {
        process.stdout.write(`${i} elefantes`)
        for (let j = 1; j <= i; j++) {
            process.stdout.write(" incomodam");
        }
        console.log(" muito mais!")
    }
}
*/