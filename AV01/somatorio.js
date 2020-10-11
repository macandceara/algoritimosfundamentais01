//Somatório: Soma de um conjunto de números.
function somatorio(numeros){
    var soma = 0;
    for(var num of numeros){
        soma+= num;
    }
    return soma;
}
  console.log(somatorio([1, 2, 3, 4, 5]));