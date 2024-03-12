// let suma = 0;
// let contador = 0;
// for (let i = 0; i <= 50; i++) {
//     if(i % 2 !== 0){
//         suma += i;
//         contador++;
//     }
//   }

//   console.log(suma, contador)


let ronda = Number(prompt("Ingresa cantidad de rondas"));
let victoriasJugador = 0;
let victoriasComputador = 0;
let empate = 0;
let resultado = "";

for (let i = 1; i <= ronda; i++){
    jugar(i);
}

resultado += victoriasJugador

function jugar(){
    let papel = 0;
    let tijera = 1;
    let roca = 2;

}