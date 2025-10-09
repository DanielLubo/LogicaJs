// Convierte a mayúsculas solo las palabras con más de 5 letras

const palabras = [
    'el pepe',
    'ete secht',
    'los huevos',
    'la rata con thiner',
    'so',
    'hola',
    'mambo',
    'ekisde',
    'yo',
]

const conversionMayuscula = palabras.map((palabra) => palabra.length > 5 ? palabra.toLocaleUpperCase() : palabra);
console.log(conversionMayuscula);