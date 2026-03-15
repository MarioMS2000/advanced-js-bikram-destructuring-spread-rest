//RESUELVE LOS EJERCICIOS AQUÍ
/*Destructuring arrays
 1.- Dado el objeto empleados, extrae la empleada Ana completa.
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
]; */

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
console.log(empleados);
const [, ana] = empleados;
console.log(ana);

/*2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com */
const [luis] = empleados;
console.log(luis.email)
//Versión pro
const [{ email }] = empleados;
console.log(email);

/*3.- Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5;
let b = 3;

// Al final
let a = 3;
let b = 5; */
let a = 5;
let b = 3;

[a, b] = [b, a];

console.log("a valia 5 y ahora vale ->" + a); // 3
console.log("b valia 3 y ahora vale ->" + b); // 5

/*4.- Dado el objeto HIGH_TEMPERATURES
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las 
variables maximaHoy y maximaManana

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana); */

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

/*const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow; */
//Esto de arriba es como hacer esto de abajo pero con destructuración
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log("Temperatura maxima hoy " + maximaHoy);
console.log("Temperatura maxima mañana " + maximaManana);

//Spread/Rest
/*5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y 
devuelva la suma de todos los demás argumentos.
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26
 */
//Para recibir una cantidad variable usamos rest operator (...numeros)
function sumEveryOther(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(sumEveryOther(6, 8, 2, 3, 1));//20
console.log(sumEveryOther(11, 3, 12)); //26

/*6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos 
(incluyendo números y strings y retorne la suma solo de los números).
addOnlyNums(1, "perro", 2, 4); //7 */
function addOnlyNums(...argumentos) {
    return argumentos.filter(arg => typeof arg === "number").reduce((acc, num) => acc + num, 0);
}

console.log(addOnlyNums(1, "perro", 2, 4));

/* 7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y 
devuelva un número que indique cuántos argumentos ha recibido.
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4
*/
function countTheArgs(...argumentos) {
    return argumentos.length;
}
console.log(countTheArgs("gato", "perro"));
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

/*8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo 
un array que combine los dos (usando spread operator). */
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(combineTwoArrays([1, 2], [3, 4])); // [1, 2, 3, 4]

/* 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva 
un array de elementos únicos, sin repetidos.

onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
 */
function onlyUniques(...argumentos){
    //Ay que poner [] porque Set no es un array con lo cual hay que transformarlo a array
    return [...new Set(argumentos)];//Set no admite repetidos asi que los elimina y ... sirve para sacar los valores y sin new da error
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));//["gato", "pollo", "cerdo"]
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));//[1, 2, 3, 6, 7, 8]

/* 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como 
argumentos y los combine todos en un solo array.
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1] */

//Recibe todos los arrays y mételos en un array grande --> tipo asi combineAllArrays([3,6,7,8], [2,7,3,1])
function combineAllArrays(...arraysYargumentos){
    //return arraysYargumentos.flat();//aplana el array
    return arraysYargumentos.reduce((acc, arr) => [...acc, ...arr], []);
}
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));// [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

/*11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, 
los eleve al cuadrado y devuelva la suma de todos los valores cuadrados. */
function sumAndSquare(...argumentos){
    return argumentos.reduce((acc,num) => acc + num ** 2,0);
}
console.log(sumAndSquare(2, 3));