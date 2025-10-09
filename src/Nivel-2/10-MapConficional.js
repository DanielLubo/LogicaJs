// Duplica números pares, triplica impares'

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15,];
const numerosDuplicados = numeros.map((numero) => numero % 2 === 0 ? numero * 2 : numero * 3);
console.log(numerosDuplicados);
console.log('el pepe');