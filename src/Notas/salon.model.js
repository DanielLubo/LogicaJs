import { Estudiante } from "./estudiante.model.js"

export class Salon {
    /**
     * @param {string} nombre
     * @param {string} grado
     */
    constructor(nombre = 'Salon A', grado = '11'){
        this.nombre = nombre;
        this.grado = grado;
        /** @type {Estudiante[]} */
        this.estudiantes = [];
    }


    /**
     * @param {string} nombre
     * @param {string} apellido
     * @param {number} edad
     * @param {string} dni
     * @returns {Estudiante | null}
     */
    agregarEstudiante(nombre, apellido, edad, dni){
        const existe = this.estudiantes.find(est => est.dni === dni);

        if(existe){
            console.warn(`Ya existe un estudiante con DNI: ${dni}`);
            return null;
        }

        const nuevoEstudiante = new Estudiante(nombre, apellido, edad, dni);
        this.estudiantes.push(nuevoEstudiante);
        console.log(`Estudiante ${nombre} ${apellido} agregado exitosamente`);
        return nuevoEstudiante;
    }

    eliminarEstudiante(dni){
        const indice = this.estudiantes.findIndex(est => est.dni === dni);

        if(indice === -1){
            console.log(`No se encontro al estudiante con dni: ${dni}`);
            return false;
        }

        const eliminado = this.estudiantes.splice(indice, 1)[0];
        console.log(`Estudiante ${eliminado.nombre} ${eliminado.apellido}, ha sido eliminado`);
        return true;
    }

    buscarEstudiante(dni){
        return this.estudiantes.find(est => est.dni === dni);
    }

    filtrarEstudiantes(estado = 'todos'){
        switch(estado.toLowerCase()){
            case 'aprobados':
                return this.estudiantes.filter(est => est.estado === 'Aprobado');
            case 'reprobados':
                return this.estudiantes.filter(est => est.estado === 'Reprobado');
            case 'sin calificar':
                return this.estudiantes.filter(est => est.estado === 'Sin Calificar');
            case 'todos':
                default: 
                return this.estudiantes;
        }
    }

    listarEstudiantes(){
    const todos = this.filtrarEstudiantes('todos');
    if(todos.length === 0){  // ✅ .length === 0
        console.log('No hay estudiantes en este salon');
        return;
    }

    console.log(`\n ${this.nombre} - ${this.grado} `);
    console.log(`Total de estudiantes: ${todos.length}\n`);  // ✅ todos.length

    todos.forEach((est, index) => {  // ✅ Usa la variable todos
        console.log(`${index + 1}. ${est.nombre} ${est.apellido}`);
        console.log(`   DNI: ${est.dni}`);
        console.log(`   Notas: [${est.notas.join(', ') || 'Sin notas'}]`);
        console.log(`   Promedio: ${est.promedio.toFixed(2)}`);
        console.log(`   Estado: ${est.estado}`);
        console.log('---');
    })
}

    listarEstudiantesAprobados(){
        const aprobados = this.filtrarEstudiantes('aprobados');

        if(aprobados.length === 0){
            console.log('No hay estudiantes Aprobados');
            return;
        }

        console.log(`\n Estudiantes Aprobados`);
        console.log(`Total: ${aprobados.length}\n`);

        aprobados.forEach((est, index) => {
            console.log(`${index + 1}. ${est.nombre} ${est.apellido}, Promedio: ${est.promedio.toFixed(2)}`);
        })
    }

    listarEstudiantesReprobados(){
        const reprobados = this.filtrarEstudiantes('reprobados');

        if(reprobados.length === 0){
            console.log('No hay estudiantes Reprobados');
            return;
        }

        console.log(`\n Estudiantes Reprobados`);
        console.log(`Total: ${reprobados.length}\n`);

        reprobados.forEach((est, index) => {
            console.log(`${index + 1}. ${est.nombre} ${est.apellido}, Promedio: ${est.promedio.toFixed(2)}`);
        })
    }

    calificarEstudiante(dni, nota){
        const estudiante = this.buscarEstudiante(dni);

        if(!estudiante){
            console.warn(`No se encontró estudiante con dni: ${dni}`);
            return false;
        }

        estudiante.agregarNota(nota);
        console.log(`Nota ${nota} agregada a ${estudiante.nombre} ${estudiante.apellido}`);
        console.log(`Promedio: ${estudiante.promedio.toFixed(2)} - Estado: ${estudiante.estado}`);
        return true;
    }

    cantidadEstudiantes(){
        return this.estudiantes.length;
    }
}