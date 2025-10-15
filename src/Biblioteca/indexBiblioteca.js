import { Libro } from "./libro.model";
import { Biblioteca } from "./biblioteca.model";



const miBiblioteca = new Biblioteca();
console.log('Biblioteca creada');

miBiblioteca.crearAgregarLibro('Los huevos de pascua', 'Dross');
miBiblioteca.crearAgregarLibro('La rata con thiner', 'NoseXd');
miBiblioteca.mostrarLibros();

// miBiblioteca.agregarLibro(libroUno);
// miBiblioteca.agregarLibro(lirboDos);
// miBiblioteca.mostrarLibros();

// miBiblioteca.prestarLibro(libroUno.id, 'Ana Sofia');
// miBiblioteca.mostrarLibros();

// miBiblioteca.devolverLibro(libroUno.id);
// miBiblioteca.mostrarLibros();
