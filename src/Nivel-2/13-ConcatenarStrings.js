// Une todas las palabras de un array en una frase

const palabras = [
    'Los', 
    'huevos', 
    'de', 
    'pascua', 
    'de', 
    'san', 
    'andreas', 
    'en', 
    'particular', 
    'tienen', 
    'la', 
    'facultad', 
    'de',
    'ser',
    'oscuros',
    'y',
    'muy',
    'tetricos',
    '...',
    'TIN',
]

const frase = palabras.reduce((acc, palabra) => {
    return acc + ' ' + palabra;
}, '');
console.log(frase);