/**
 * 11 Crea un objeto "biblioteca" que contenga un array de libros. Cada libro debe tener: título, autor, disponible. Crea métodos para:
 * - Prestar libro (cambiar disponible a false)
 * - Devolver libro (cambiar disponible a true)
 * - Listar libros disponibles
 */


const biblioteca = {
    libros : [
        {titulo: 'Los webos de pascua', autor: 'Dross', disponible : true,},
        {titulo: 'La rata con thinner', autor: 'Omar Ramires', disponible : true,},
        {titulo: 'Flopa aventuras', autor: 'Floppa', disponible : false,},
        {titulo: 'Sexo la novela', autor: 'Floppa', disponible : true,},
    ],

    prestarLibro ( tituloLibro ) {
        const libroEncontrado = false;

        for (let libro of this.libros){
            if(tituloLibro === libro){
                libroEncontrado = true;
                if(libro.disponible === true){
                    !libro.disponible;
                    console.log('Libro prestado');
                } else {
                    console.log('El libro no esta disponible para su prestamo');
                }
            }
        }   
        if(!libroEncontrado){
            console.log('El nombre del libro no se ha encontrado');
        }
    },
}

biblioteca.prestarLibro('Sexo la novela');
console.log('hola');