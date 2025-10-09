// Filtra objetos que contengan cierta palabra en su nombre
const nose = [
    {nombre: 'Sara', cargo: 'IT'},
    {nombre: 'Sofia', cargo: 'Marketing'},
    {nombre: 'Ana', cargo: 'IT'},
    {nombre: 'Angela', cargo: 'Electricidad'},
    {nombre: 'Nicol', cargo: 'Secretaria'},
]

const filtro = nose.filter((user) => user.cargo === 'IT');
// const filtroContiene = nose.filter((user) => user.cargo.includes('a'));
console.log(filtro);