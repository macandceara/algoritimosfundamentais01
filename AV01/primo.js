//Número é primo: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n.
var readline = require('readline');
var n;
var a;

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Informe um numero", function(answer) {
    n = answer;
    a = n + 10;
    console.log("O numero final é " +a);
    leitor.close();
});