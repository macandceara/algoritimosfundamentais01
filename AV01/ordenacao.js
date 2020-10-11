//Ordenação: Ordenar um array usando o método Quicksort
function Quicksort (array) {
    if (array.length ===0) {      // se array vazio retorna vazio
        return [];
    } 
    if (array.length ===1) {         // se array vum elemento retorna o proprio array 
        return array;
    } 

    var pivo = array[0]; // pivo é o primeiro elemento

    var inicio = array.filter (n => n<pivo);     // comparando se os nuneros sao maiores q o pivo
    var igual = array.filter (n => n===pivo);    // comparando com o pivo
    var fim = array.filter (n => n>pivo);     // comparando os numeros maiores que o pivo
 
    return Quicksort(inicio).concat(igual).concat(Quicksort(fim));   // concatenando
}
console.log(Quicksort([2, 2, 2, 2, 55, -5, 66, 2, 7, 0, -5,]));   // ARRAY TESTE 

