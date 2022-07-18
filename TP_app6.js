/**
 * Crear una función que imprima todos
 * los dígitos decimales, del 0 al 9,
 * usando un ciclo For.
 */

//  function mostrarDecimales() {
// 	for (let i = 0; i <= 9; i++) {
		
// 	 console.log(i);
// 	}
// }

// // invoca tu funcion aqui
// mostrarDecimales();

function mostrarDecimales() {
	for (let i = 0; i <= 1000; i++) {
		
	 console.log(i/100);
	}
}

// invoca tu funcion aqui
mostrarDecimales();

// 2. Crear una función que imprima los números entre el 5 y el 20, saltando de
// tres en tres. https://codesandbox.io/s/mesa-21-ejercicio-2-3n0np
// function tresEnTres() {
// 	// let contador = 5;
// 	for (let i = 5; i <=20; i=i+3) {
// 		   console.log(i);
// 			// contador = contador + 3;
			
// 	}
// }
// tresEnTres();
function tresEnTres(inicio, final,salto) {
	// let contador = 5;
	for (let i = inicio; i <=final; i=i+salto) {
		   console.log(i);
			// contador = contador + 3;
			
	}
}
tresEnTres(5,20,3);
// 3. Crear una función que imprima la sumatoria de todos los números entre el
// 0 y el 100.
const sumatoria = () =>{
	let contador = 0;
	for (let i = 0; i <= 100; i++) {
		contador += i;
		
	}
	return contador;
}
let resultado=sumatoria();
console.log(resultado);
// https://codesandbox.io/s/mesa-21-ejercicio-3-zw962?file=/src/index.js
// 4. Crear una función que reciba un string y luego imprimir la cantidad de
// vocales que se encuentran en dicha frase.
// const printVocal = (string) =>{
// 	let contador = 0;
// 	for (let i = 0; i < string.length; i++) {
// 		if((string[i] === "a" || string[i] === "e")||((string[i] === "i" || string[i] === "o") || string[i] === "u") ){
// 			contador++;
// 		};
		
// 	}return contador;
// }
const printVocal = (string) =>{
	let contador = 0;
	for (let i = 0; i < string.length; i++) {
		switch (string[i]) {
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
				console.log("ya entre al case letra "+string[i]);
         contador++;
			
		  }
		  
	}
	if(contador === 0){
		contador = "No se encontro ninguna vocal";
	}
	return contador;
}
let print = printVocal("n");
console.log(print);
// https://codesandbox.io/s/mesa-21-ejercicio-4-x9frm?file=/src/index.js
// 5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// contenido sea igual a la original pero invertida.
function lista(string) {
	let invertido = [];
	for (let i = string.length -1; i >= 0; i--) {
		invertido.push(string[i]);
		
	}
	return invertido;
 	
}
let invert = lista("hola");
console.log(invert);
// function lista(string) {
// 	let invertido = string;
// 	for (let i = string.length -1; i >= 0; i--) {
// 		invertido = invertido+string[i];
		
// 	}
// 	return invertido;
 	
// }
// let invert = lista("hola");
// console.log(invert);
// https://codesandbox.io/s/mesa-21-ejercicio-5-812tw?file=/src/index.js
// 6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
// forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
const piramide = () =>{
	let array =[];
	for (let i = 1; i <= 30; i++) {
		array[i] = [];
		 for (let j = 1; j <=i ; j++) {
			 array[i][j] = i;
			
		 }
		
	}return array;
}
console.table(piramide());
