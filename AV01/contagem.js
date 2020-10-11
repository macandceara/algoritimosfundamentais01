//Contagem: Dado um valor N, conte quantos valores inteiros existem entre 1 (inclusive) e N (inclusive).
let i;                //indice for
let valores = 0;      //soma
let n = 10;          // valores q quero contar 
function cont(resp) {
    for (i = 1; resp >= i; i++) {
        valores++;
    }
    return valores;
}
console.log(" O numero de  valores interiros entre é " + cont(n));
