// BUBBLE SORT

// A partir de él siguiente array de edades nos solicitan realizar lo siguiente

    // const edades = [33, 27, 34, 30, 34, 25, 150];

// a. Desarrollar una función que ordene internamente de forma ascendente las edades, la misma deberá retornar 
// él array ordenado , es decir deberíamos obtener resultado como él siguiente.


// const ordenarArray = (array) => {

//     for (let i = 0; i < array.length -1; i++) {
//         for (let j = 0; j < array.length -1; j++) {
//          if(array[j+1] <= array[j]){
//             let temp = array[j];
//             array[j] = array[j+1];
//             array[j+1] = temp;
//         }}       
//     }

//    return array;
// }

// console.log(ordenarArray(edades));

// b. Desarrollar una función que ordene internamente de forma descendente las edades, la misma deberá retornar él array 
// ordenado , es decir deberíamos obtener resultado como él siguiente.

// const ordenarArray = (array) => {

//     for (let i = 0; i < array.length -1; i++) {
//         for (let j = 0; j < array.length -1 -i; j++) {
//          if(array[j+1] > array[j]){
//             let temp = array[j];
//             array[j] = array[j+1];
//             array[j+1] = temp;
//         }}       
//     }

//    return array;
// }

// console.log(ordenarArray(edades));

// 2. Dado un array de strings:

const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L'];

// ¿Cómo pudieras ordenar el array anterior, alfabéticamente?

const ordenarLetras = (array) => {

    for (let i = 0; i < array.length -1; i++) {
        for (let j = 0; j < array.length -1 -i; j++) {
         if(array[j+1] <= array[j]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }}       
    }

   return array;
}

console.log(ordenarLetras(letras));



