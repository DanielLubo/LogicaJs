// Calcula el total de un array de productos {name, price, quantity}

const productos = [
    {id: 1, name: 'Huevos', price: 14500, quantity: 2},
    {id: 2, name: 'Avena en bolsa', price: 2200, quantity: 3},
    {id: 3, name: 'Papas de pimienta', price: 8700, quantity: 1},
    {id: 4, name: 'Jugo Naranja', price: 4500, quantity: 1},
    {id: 5, name: 'Arroz', price: 2400, quantity: 2},
];

const valorTotal = productos.reduce((acc, producto) => {
    return acc + (producto.price * producto.quantity);
}, 0);

console.log(`Valor total de los productos: ${valorTotal}`);