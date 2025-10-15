import { Libro } from "./libro.model";

export class Biblioteca{
    constructor(){
        this.coleccion = [];
    }

    crearAgregarLibro(titulo, autor){
        const nuevoLibro = new Libro(titulo, autor);

        this.coleccion.push(nuevoLibro);
        console.log(`✅ Libro creado y agregado: "${titulo}" (ID: ${nuevoLibro.id})`);
        return nuevoLibro;
    }

    buscarLibro(id){
        return this.coleccion.find(libro => libro.id === id);
    }

    prestarLibro(id, nombreUsuario){
        const libroEncontrado = this.buscarLibro(id);

        if(libroEncontrado){
            return libroEncontrado.prestar(nombreUsuario);
        } else {
            console.log('Error: Libro no encontrado en la coleccion');
            return false;
        }
    }

    devolverLibro(id){
        const libroEncontrado = this.buscarLibro(id);

        if(libroEncontrado){
            return libroEncontrado.devolver();
        } else {
            console.log('pos no sexd');
            return false;
        }
    }

    mostrarLibros(){
        console.log("--- Lista de Libros en la Biblioteca ---");
        this.coleccion.forEach(libro => {
            console.log(libro.getInfo());
        })
    }
}