// 1 Crea un array con 5 nombres de frutas y muestra cada fruta en la consola usando un bucle
// 2 Crea un array con los números [10, 20, 30, 40, 50] y calcula la suma de todos los elementos.
// 3 Dado el array [15, 8, 23, 4, 42, 16], encuentra e imprime el número mayor usando un bucle.
// 4 Crea un array con varios nombres (algunos repetidos) y cuenta cuántas veces aparece un nombre específico.
// 5 Crea un array con números del 1 al 5 y crea otro array con los elementos en orden inverso (sin usar reverse()).

// 6 Crea un array con 3 objetos "estudiante" (nombre, edad, nota). Imprime el nombre del estudiante con la nota más alta.
// 7 Usando el array del ejercicio anterior, crea un nuevo array solo con estudiantes mayores de 18 años.
// 8 Crea un array de objetos "producto" (nombre, precio, cantidad). Calcula el valor total del inventario (precio × cantidad de cada producto).
// 9 Crea una función que reciba un array de personas y un nombre, y retorne el objeto completo de esa persona.
// 10 Dado un array de objetos "empleado" (nombre, departamento, salario), cuenta cuántos empleados hay en cada departamento.


// 1 --------------------------------------------------------
// 1 Crea un array con 5 nombres de frutas y muestra cada fruta en la consola usando un bucle
const frutas = [
    'Fresa',
    'Mora',
    'Mango',
    'Limon',
    'Mandarina',
]

for(let key of frutas){
    console.log(key);
}




// 2 --------------------------------------------------------
// 2 Crea un array con los números [10, 20, 30, 40, 50] y calcula la suma de todos los elementos.

const numeros = [10, 20, 30, 40, 50];

const suma = numeros.reduce((acc, num) => {
    return acc += num;
}, 0);

console.log(suma);




// 3 --------------------------------------------------------
// 3 Dado el array [15, 8, 23, 4, 42, 16], encuentra e imprime el número mayor usando un bucle.

const nuevosNumeros = [15, 8, 23, 4, 42, 16];
const numeroMayor = nuevosNumeros.reduce((a, b) => Math.max(a, b), - Infinity);
console.log(numeroMayor);




// 4 --------------------------------------------------------
// 4 Crea un array con varios nombres (algunos repetidos) y cuenta cuántas veces aparece un nombre específico.

const nameUsers = ['Ana', 'Sofia', 'Sara', 'Linda', 'Angela', 'Ana', 'Sara'];

const findUser = (name) => {
    const matches = nameUsers.filter(user => user === name);
    const repeat = matches.length;

    if(repeat === 0){
        console.log('El nombre no se ha encontrado');
    } else if ( repeat === 1){
        console.log(`El nombre solo se encuentra: ${repeat} vez`);
    } else if( repeat > 1) {
        console.log(`El nombre se repite: ${repeat} veces`);
    }
}

findUser('Ana');




// 5 --------------------------------------------------------
// 5 Crea un array con números del 1 al 5 y crea otro array con los elementos en orden inverso (sin usar reverse()).

const numerosUno = [1, 2, 3, 4, 5];
const arrayInverso = [];

const elementosReves = numerosUno.forEach((num) => {
    arrayInverso.unshift(num);
})

console.log(arrayInverso);



// 6 --------------------------------------------------------
// 6 Crea un array con 3 objetos "estudiante" (nombre, edad, nota). Imprime el nombre del estudiante con la nota más alta.

const estudiantes = [
    {id : 1, nombre: 'Ana', edad: 21, nota : 4.7},
    {id : 2, nombre: 'Sara', edad: 17, nota : 4.2},
    {id : 3, nombre: 'Sofia', edad: 22, nota : 5},
];

const mejorEstudiante = estudiantes.reduce((anterior, actual) => {
    return actual.nota > anterior.nota ? actual : anterior;
});

console.log(mejorEstudiante);




// 7 --------------------------------------------------------
// 7 Usando el array del ejercicio anterior, crea un nuevo array solo con estudiantes mayores de 18 años.
const mayoresDeEdad = estudiantes.filter(est => est.edad >= 18);
console.log(mayoresDeEdad);




// 8 --------------------------------------------------------
// 8 Crea un array de objetos "producto" (nombre, precio, cantidad). Calcula el valor total del inventario (precio × cantidad de cada producto).
const productos = [
    {id: 1, name : 'Ryzen 5 9600x', price : 949000, amount : 15, },
    {id: 2, name : 'Ryzen 7 9700x', price : 1245000, amount : 6, },
    {id: 3, name : 'Ryzen 5 7600x', price : 678000, amount : 51, },
    {id: 4, name : 'Intel 9 Ultra', price : 7899000, amount : 6, },
    {id: 5, name : 'Monitor Asus', price : 549000, amount : 20, },
    {id: 6, name : 'Monitor LG', price : 654900, amount : 17, },
]

const Inventario = () => {
    productos.forEach((producto) => {
        const valorTotalProducto = producto.price * producto.amount;
        console.log(`${producto.name} valor total en inventario: ${valorTotalProducto.toLocaleString('es-CO')}`);
    });

    const totalInventario = productos.reduce((acc, pro) => {
        const valorLinea = pro.price * pro.amount;
        return acc + valorLinea;
    }, 0);  

    console.log(`Valor total del inventario: $ ${totalInventario.toLocaleString('es-CO')}`);
}
Inventario();