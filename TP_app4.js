// a. Desarrollar una función que ordene internamente de forma ascendente según él
// saldo de cada cuenta, la misma deberá retornar él array ordenado .



const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: false,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{
titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}]

function ordenaSaldo (array){

    for (let i = 0; i < array.length -1; i++) {
        for (let j = 0; j < array.length -1 -i; j++) {
            if(array[j].saldo>=array[j+1].saldo){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }            
        }        
    }
    return array;    
}

console.log(ordenaSaldo(arrayCuentas));

// b. Desarrollar una función que ordene internamente de forma ascendente según la
// edad del titular de cada cuenta, la misma deberá retornar él array ordenado.


// const ordenaEdad = (Array) => {

//     for (let i = 0; i < Array.length -1; i++) {
//         for (let j = 0; j < Array.length -1 -i; j++) {
//             if(Array[j].edadTitular >= Array[j+1].edadTitular){
//                 let aux = Array[j];
//                 Array[j] = Array[j+1];
//                 Array[j+1]=aux;
//             }            
//         }        
//     }
//     return Array;
// }

// console.log(ordenaEdad(arrayCuentas));
