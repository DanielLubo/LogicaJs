// Añade 21% a un array de precios usando map()

const precios = [
    20000,
    45000,
    179800,
    1000000,
    32000,
    15000,
]

const IVA = precios.map((precio) => precio * 1.21);
console.log(IVA);