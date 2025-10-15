// Calcula el promedio de calificaciones con reduce()

const calificaciones = [
    {nombre: 'Sofia', nota: [4.7,  4, 4.9, 5, 4.1, 4.6]},
    {nombre: 'Sara', nota: [4.2,  4, 4.1, 5, 4.6, 4.6]},
    {nombre: 'Ana', nota: [5, 4.5, 4.9, 5, 4.1, 4.6]},
    {nombre: 'Angela', nota: [3.8,  4, 4.1, 3, 4.1, 4.2]},
]

// const promedio = calificaciones.reduce((acc, estudiante) => {
//     let nota = estudiante.calificacion;
//     return acc += nota;
// }, 0);  

// const promedioTotal = promedio / calificaciones.length
// console.log(promedio);
// console.log(promedioTotal);

const promedioEstudiantes = calificaciones.map(estudiantes => {

    const sumaNotas = estudiantes.nota.reduce((acc, nota) => {
        return acc + nota;
    }, 0);

    const promedio = sumaNotas / estudiantes.nota.length;

    return {
        nombre: estudiantes.nombre,
        promedio: promedio.toFixed(2),
    };
});

console.log(promedioEstudiantes);