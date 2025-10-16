import readlineSync from 'readline-sync';
import { Salon } from './salon.model.js';

export class Menu {
    /**
     * @param {Salon} salon
     */
    constructor( salon ){
        /** @type {Salon} */
        this.salon = salon;
        this.opciones = {
            '1': 'Agregar estudiante',
            '2': 'Eliminar estudiante',
            '3': 'Buscar estudiante',
            '4': 'Calificar estudiante',
            '5': 'Listar todos los estudiantes',
            '6': 'Listar estudiantes aprobados',
            '7': 'Listar estudiantes reprobados',
            '8': 'Mostrar información de estudiante',
            '9': 'Salir'
        };
    }

    mostrarMenu(){
        console.log('|- Menu');
        for(let [numero, descripcion] of Object.entries(this.opciones)){
            console.log(`${numero}. ${descripcion}`);
        }
        console.log('|------');
    }

    iniciar(){
        let continuar = true;
        while(continuar){
            this.mostrarMenu();
            const opcion = readlineSync.question('Seleccione una opcion');

            switch(opcion){
                case '1':
                    this.agregarEstudiante();
                    break;
                case '2':
                    this.eliminarEstudiante();
                    break;
                case '3':
                    this.buscarEstudiante();
                    break;
                case '4':
                    this.calificarEstudiante();
                    break;
                case '5':
                    this.salon.listarEstudiantes();
                    break;
                case '6':
                    this.salon.listarEstudiantesAprobados();
                    break;
                case '7':
                    this.salon.listarEstudiantesReprobados();
                    break;
                case '8':
                    this.mostrarInfoEstudiante();
                    break;
                case '9':
                    continuar = false;
                    console.log('¡Hasta luego!');
                    break;
                default:
                    console.log('Opción inválida. Intente nuevamente.');
            }

            if(continuar && opcion !== '9'){
                readlineSync.question('\nPresione ENTER para continuar...');
            }
        }
    }

    agregarEstudiante(){
        console.log('Agregar Estudiante');
        const nombre = readlineSync.question('Nombre: ');
        const apellido = readlineSync.question('Apellido: ');
        const edad = readlineSync.question('Edad: ');
        const dni = readlineSync.question('Dni: ');
        
        this.salon.agregarEstudiante(nombre, apellido, edad, dni);
    }

    eliminarEstudiante(){
        console.log('Eliminar Estudiante');
        const dni  = readlineSync.question('DNI del estudiante a eliminar: ');
        this.salon.eliminarEstudiante(dni);
    }

    buscarEstudiante(){
        console.log('Buscar Estudiante');
        const dni = readlineSync.question('DNI del estudiante: ');
        const estudiante = this.salon.buscarEstudiante(dni);

        if(estudiante){
            estudiante.mostrarInformacion();
        } else {
            console.log('Estudiante no encontrado.');
        }
    }

    calificarEstudiante(){
        console.log('Calificar Estudiante');
        const dni = readlineSync.question('DNI del estudiante: ');
        const nota = parseFloat(readlineSync.question('Nota (0-5): '));

        this.salon.calificarEstudiante(dni, nota);
    }

    mostrarInfoEstudiante(){
        console.log('\n--- INFORMACIÓN DE ESTUDIANTE ---');
        const dni = readlineSync.question('DNI del estudiante: ');
        const estudiante = this.salon.buscarEstudiante(dni);

        if(estudiante){
            const info = estudiante.getInfo();
            console.log('\n--- Información ---');
            console.log(`Nombre: ${info.nombre}`);
            console.log(`Edad: ${info.edad}`);
            console.log(`DNI: ${info.dni}`);
            console.log(`Número de notas: ${info.numeroNotas}`);
            console.log(`Promedio: ${info.promedio}`);
            console.log(`Estado: ${info.estado}`);
        } else {
            console.log('Estudiante no encontrado.');
        }
    }
}