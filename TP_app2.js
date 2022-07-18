// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron

const gastos = [
    [1135,2500,900,1600,2800,3650,1100],
    [1750,1890,1900,1300,898,1750,2800],
    [1700,1150,1690,1900,1770,4500,2560],
    [800,1250,1430,2100,1980,1270,950]
    ];

    function arraySemanaGastos (matriz){
        let arraySemana = [];
        for (let i = 0; i < matriz.length; i++) {
            let auxFila = 0;
            for (let j = 0; j < matriz[i].length; j++) {
                auxFila+= matriz[i][j];
            }
            arraySemana.push(auxFila);
        }
        return arraySemana;
    }

    let arraySemana = arraySemanaGastos(gastos);

function semanaMayor(arraySemana){
    let queSemana = 0;
    let cuentaSemana = 0;
    for (let i = 0; i < arraySemana.length; i++) {
        if(queSemana<=arraySemana[i]){
            queSemana=arraySemana[i];
            cuentaSemana = i+1;
        }
    }
    return ` La semana de mayor gasto fue la semana ${cuentaSemana}, con un gasto de $${queSemana}.`;
}

// function diaMayorEnSemana(gastos){
//     let mayorDeLaSemanaIndicada = 0;
//     for (let i = 0; i < gastos[cuentaSemana-1].length; i++) {
//         if(mayorDeLaSemanaIndicada<=gastos[cuentaSemana-1][i]){
//             mayorDeLaSemanaIndicada = gastos[cuentaSemana-1][i];
//         }
//     }
//     return `El mayor gasto de la semana de mayores gastos es ${mayorDeLaSemanaIndicada}`;
// }

console.log(semanaMayor(arraySemana))