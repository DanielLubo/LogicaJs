// Filtra usuarios con propiedad active: true
const usuarios = [
    {id: 1, nombre: 'Sara', active: true},
    {id: 2, nombre: 'Sofia', active: true},
    {id: 3, nombre: 'Ana', active: true},
    {id: 4, nombre: 'Angela', active: false},
    {id: 5, nombre: 'Daniela', active: false},
];

const propiedadActive = usuarios.filter((user) => user.active === true);
console.log(propiedadActive);