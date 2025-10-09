// Convierte un array de strings a mayúsculas con map()
const letras = [
    'german cat',
    'chinise cat',
    'au au auau',
    'waos',
]

const mayusculas = letras.map((palabra) => palabra.toLocaleUpperCase());
console.log(mayusculas);