// Cuenta cuántos items hay de cada categoría

const items = [
    {nombre: 'manzana', cat: 'frutas'}, 
    {nombre: 'mora', cat: 'frutas'}, 
    {nombre: 'arandanos', cat: 'frutas'}, 
    {nombre: 'tomate', cat: 'verduras'}, 
    {nombre: 'lechuga', cat: 'verduras'}, 
    {nombre: 'coco', cat: 'frutas'},
];

const contador = items.reduce((acc, item) => {

    let categoria = item.cat;
    acc[categoria] ? acc[categoria] = acc[categoria] + 1 : acc[categoria] = 1;
    return acc;
}, {});
console.log(contador);
