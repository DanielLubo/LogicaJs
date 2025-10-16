import { v4 as uuid } from "uuid";

export class Estudiante {
    constructor(nombre, apellido, edad, dni){
        this.id = uuid();
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.notas = [];
        this.estado = 'Sin Calificar';
        this.promedio = 0;
    }

    agregarNota(nota){
        if(nota >= 0 && nota <= 5){
            this.notas.push(nota);
            this.actualizarEstado();
        } else {
            console.warn(`Nota invalida: ${nota}. Debe estar entre 0 y 5`);
        }
    }

    calcularPromedio(){
        if(this.notas.length === 0){
            return 0;
        }
        const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
        this.promedio = suma / this.notas.length;
        return this.promedio;
    }

    actualizarEstado(){
        const promedioActual = this.calcularPromedio();

        if(this.notas.length === 0){
            this.estado = 'Sin Calificar';
        } else if (promedioActual >= 4) {
            this.estado = 'Aprobado';
        } else {
            this.estado = 'Reprobado';
        }
    }

    verificarAprobado(notaMinima = 4){
        return this.calcularPromedio() >= notaMinima;
    }

    cantidadNotas(){
        return this.notas.length;
    }

    getInfo(){
        return {
            id: this.id,
            nombre: `${this.nombre} ${this.apellido}`,
            edad: this.edad,
            dni: this.dni,
            numeroNotas: this.notas.length,
            promedio: this.promedio.toFixed(2),
            estado: this.estado,
        };
    }

    mostrarInformacion(){
        console.log(`
            Estudiante: ${this.nombre} ${this.apellido}
            DNI: ${this.dni}
            Notas: [${this.notas.join(', ')}]
            Promedio: ${this.promedio.toFixed(2)}
            Estado: ${this.estado}
        `);
    }
}