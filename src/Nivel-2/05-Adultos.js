// Filtra usuarios mayores de 18 años de un array de objetos
const users = [
    {id: 1, nombres: 'el papu', edad: 10},
    {id: 2, nombres: 'Sara', edad: 18},
    {id: 3, nombres: 'Sofia', edad: 20},
    {id: 4, nombres: 'Angela', edad: 21},
    {id: 5, nombres: 'Ana', edad: 22},
    {id: 6, nombres: 'Nicol', edad: 17},
    {id: 7, nombres: 'Yamileth', edad: 16},
];

const mayoresEdad = users.filter((user) => user.edad >= 18);
console.log('Usuarios mayores de edad');
console.log(mayoresEdad);