// Convierte array de usuarios en objeto indexado por ID

// Array de Usuarios (Lista)
const usuarios = [
  { id: 101, nombre: 'Ana', rol: 'admin' },
  { id: 205, nombre: 'Leo', rol: 'usuario' },
  { id: 312, nombre: 'Mia', rol: 'supervisor' }
];

const nosexd = usuarios.reduce((acc, user) => {
    let clave = user.id;
    acc[clave] = user;
    return acc;
}, {});

console.log(nosexd);

const leo = nosexd[205];
console.log(leo);