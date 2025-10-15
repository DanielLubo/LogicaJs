// Convierte [[1,2], [3,4]] en [1,2,3,4]

const waos = [[1,2], [3,4]];

const plano = waos.reduce((acc, current) => {
    return acc.concat(current);
}, []);
console.log(plano);