// Agrupa objetos por una propiedad común

const momos = [
    {id : 1, nombre: 'german cat', good : true},
    {id : 2, nombre: 'chinise cat', good : true},
    {id : 3, nombre: 'crying banana cat', good : true},
    {id : 4, nombre: 'maxwell', good : true},
    {id : 5, nombre: 'huh Cat', good : false},
    {id : 6, nombre: 'chipi chapa cat', good : false},
    {id : 7, nombre: 'driving cat', good : false},
]

const grupoPro = momos.reduce((acc, gato) => {
    let clave = gato.good;

    acc[clave] ? acc[clave].push(gato) : acc[clave] = [gato];
    return acc;
    
}, {});
console.log(grupoPro);