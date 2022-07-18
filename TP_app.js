
// 1) Crear una función que imprima todos los dígitos decimales, del 0 al 9, usando un ciclo For -----------------------

// function imprimeDecimal(){

//     for (let i = 0; i <= 9; i++) {
//         console.log(i);
        
//     }
// }

// imprimeDecimal()

// 2) Crear una función que imprima los números entre el 5 y el 20, saltando de tres en tres ----------------------------

// function imprimeNumero(){
//     for (let i = 5; i <= 20; i++){
//         console.log(i);
//         i+=2;
       
//     }
// }

// imprimeNumero()

// 5 - Realizar una función que, dada una lista, devuelva una nueva lista cuyo contenido sea igual a la original 
// pero invertida.

// const array = "hola";

// function invertirLista (array){
//     let arrayInvertido = [];
//     for (let i = 0; i < array.length; i++) {
//         arrayInvertido[array.length - i - 1] = array[i];
//     }
//     return arrayInvertido;
// }
// console.log(invertirLista(array));

// --------------- TAMBIEN!!!! --------------------------------------

// function lista(string) {
// 	let invertido = [];
// 	for (let i = string.length -1; i >= 0; i--) {
// 		invertido.push(string[i]);
		
// 	}
// 	return invertido;
 	
// }
// let invert = lista("hola");
// console.log(invert);

// 6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente forma :

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
