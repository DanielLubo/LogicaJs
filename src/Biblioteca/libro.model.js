import { v4 as uuid } from "uuid";

export class Libro {
    constructor(titulo, autor){
        this.id = uuid();
        this.titulo = titulo;
        this.autor = autor;
        this.estado = 'Disponible';
        this.prestado = '';
    }

    prestar(nombreUsuario){
        if(this.estado === 'Disponible'){
            this.prestado = nombreUsuario;
            this.estado = 'Prestado';
            return true;
        } else {
            console.log(`Lo sentimos el libro ya esta prestado a: ${this.prestado}`);
            return false;
        }
    }

    devolver(){
        if(this.estado === 'Prestado'){
            this.estado = 'Disponible'
            this.prestado = '';
            return true;
        } else {
            console.log('El libro ya se encuentra disponible para su prestamo');
            return false;
        }
    }   

    getInfo(){
        const prestadoA = this.estado === 'Prestado' ? `A: ${this.prestado}` : `N/A`;
        return `
            Id: ${this.id}
            Titulo: ${this.titulo}
            Autor: ${this.autor}
            Estado: ${this.estado}
            Prestado: ${prestadoA}
        `;
        
    }
}