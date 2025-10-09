// Dado un array de objetos usuarios, extrae solo los nombres
const usuarios = [
    {id: 1, nombre: 'Sara', cargo: 'Si'},
    {id: 2, nombre: 'Sofia', cargo: 'Si'},
    {id: 3, nombre: 'Angela', cargo: 'Si'},
    {id: 4, nombre: 'Ana', cargo: 'Si'},
]

const nombresUsuarios = usuarios.map((user) => user.nombre);
console.log(nombresUsuarios);