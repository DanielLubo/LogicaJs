// Suma todos los números de un array con reduce()
const numeros = [1, 2, 3, 4, 5];

const nuevo = numeros.reduce((acc, curr) => acc += curr);
console.log(nuevo);