// Crear un función que reciba por parámetro un array de números y retorne un objeto con dos propiedades:
// impares: contendrá como valor un array con los números impares 
// pares: contendrá como valor un array con los números pares


// let numeros = [1, 2, 3, 4, 5, 6];
 
// //retorno esperado de la función
// // {
// //   impares: [1,3,5],
// //   pares:[2,4,6]
// // }

// let objeto = {impares:[],pares:[]};

// function clasificaArray (array){
//     let impares = [];
//     let pares = [];

//     for (let i = 0; i < array.length; i++) {
//         if((array[i]%2)==0){
//             pares.push(array[i])
//         } else{
//             impares.push(array[i])
//         }        
//     }

//     objeto.impares = impares;
//     objeto.pares = pares;

//     return objeto;
// }

// console.log(clasificaArray(numeros));


// let paises = [
//     {
//       nombre: "Argentina",
//       continente: "Sudamerica",
//       poblacion: 40000000
//     },
//   {
//       nombre: "Colombia",
//       continente: "Sudamerica",
//       poblacion: 50372000
//     },
 
//     {
//       nombre: "Brasil",
//       continente: "Sudamerica",
//       poblacion: 300000000
//     },
//     {
//       nombre: "Venezuela",
//       continente: "Sudamerica",
//       poblacion: 25000000
//     },
//     {
//       nombre: "Chile",
//       continente: "Sudamerica",
//       poblacion: 10000000
//     }
//  ];


// Desarrollar una función que reciba por parámetro el array de países y lo ordene de forma descendente 
// según su población

// function ordenaArray(array){
//     let aux = []
//     for (let i = 0; i < array.length-1; i++) {
//         for (let j = 0; j < array.length-1-i; j++) {        
//             if(array[j+1].poblacion>=array[j].poblacion){
//                 aux = array[j+1];
//                 array[j+1] = array[j];
//                 array[j] = aux;
//             }
//         }
//     }
//     return array;
// }

// console.log(ordenaArray(paises));

// function ordenaPoblacion (array){

//     for (let i = 0; i < array.length -1; i++) {
//         for (let j = 0; j < array.length -1 -i; j++) {
//             if(array[j].poblacion<=array[j+1].poblacion){
//                 let aux = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = aux;
//             }            
//         }        
//     }
//     return array;    
// }

// console.log(ordenaPoblacion(paises));



// Crear una matriz de 4 x 8 de numeros enteros 

// Crear una función que reciba la matriz generada por parámetro y retorne la sumatoria de todos 
// los valores excepto de la fila 0

// Crear una función que reciba la matriz generada por parámetro y un valor numérico. Deberá retornar un 
// array con todos los valores mayores al parámetro recibido como valor Numérico

let matrizEnteros = [
  [1,2,3,4,5,6,7,8],
  [9,10,11,12,13,14,15,16],
  [17,18,19,20,21,22,23,24],
  [25,26,27,28,29,30,31,32]
]



// // function generaArray(matrizEnteros, numero){

// //   let arrayNuevo = [];
// //   for (let i = 0; i < matrizEnteros.length; i++) {
// //         for (let j = 0; j < matrizEnteros[i].length; j++) {
// //             if(matrizEnteros[i][j]>numero){
// //               arrayNuevo.push(matrizEnteros[i][j])
// //             }
// //         }    
// //       }
    
// //     return arrayNuevo;
// // }

// // console.log(generaArray(matrizEnteros,30));





// function sumeFilasNoCero(matrizEnteros){
//   let sumaValores = 0;
//   for (let i = 1; i < matrizEnteros.length; i++) {
//     for (let j = 0; j < matrizEnteros[i].length; j++) {
//       sumaValores+=matrizEnteros[i][j]      
//     }    
//   }
// return sumaValores;
// }

// console.log(sumeFilasNoCero(matrizEnteros));

