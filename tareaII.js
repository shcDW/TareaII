const numeros = [1, 2, 3, 4, 5];
const palabras = ["hola", "mundo", "medellín", "es", "hermoso"];
const booleanos = [true, false, true, false, true];
const objetos = [{ edad: 20 }, { edad: 25 }, { edad: 30 }, { edad: 35 }, { edad: 40 }];


const sumaNumeros = numeros.reduce((acc, num) => acc + num, 0);
const palabrasConcatenadas = palabras.reduce((acc, palabra) => acc + " " + palabra, "");
const todosVerdaderos = booleanos.reduce((acc, bool) => acc && bool, true);
const sumaEdades = objetos.reduce((acc, obj) => acc + obj.edad, 0);

const numerosPares = numeros.filter(num => num % 2 === 0);
const palabrasLargas = palabras.filter(palabra => palabra.length > 4);
const booleanosVerdaderos = booleanos.filter(bool => bool);
const objetosMayores30 = objetos.filter(obj => obj.edad > 30);


const numerosDuplicados = numeros.map(num => num * 2);
const palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());
const booleanosInvertidos = booleanos.map(bool => !bool);
const edadesIncrementadas = objetos.map(obj => ({ ...obj, edad: obj.edad + 1 }));


numeros.forEach(num => console.log(num));
palabras.forEach(palabra => console.log(palabra));
booleanos.forEach(bool => console.log(bool));
objetos.forEach(obj => console.log(obj.edad));


console.log("Resultados de .reduce():", sumaNumeros, palabrasConcatenadas, todosVerdaderos, sumaEdades);
console.log("Resultados de .filter():", numerosPares, palabrasLargas, booleanosVerdaderos, objetosMayores30);
console.log("Resultados de .map():", numerosDuplicados, palabrasMayusculas, booleanosInvertidos, edadesIncrementadas);

const saludar = () => console.log("¡Hola, mundo!");


const cuadrado = num => num * num;


const sumar = (a, b) => a + b;


const multiplicar = (a, b, c) => a * b * c;


const crearObjeto = (nombre, edad, ciudad, pais) => ({ nombre, edad, ciudad, pais });


saludar();
console.log(cuadrado(4));
console.log(sumar(3, 5));
console.log(multiplicar(2, 3, 4));
console.log(crearObjeto("Juan", 30, "Medellín", "Colombia"));