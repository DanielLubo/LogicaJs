//  Crea clase con propiedades nombre, edad y método saludar()

class persona {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar () {
        return `Bienvenido ${this.nombre}`;
    }

    getInfo () {
        return `Usuario ${this.nombre}, Edad: ${this.edad}`;
    }
}

const usuario = new persona('Daniel', '21')

console.log(usuario);
console.log(usuario.saludar());
console.log(usuario.getInfo());