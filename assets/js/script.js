let ronda = Number(prompt("Ingresa cantidad de rondas"));


for (let i = 1; i <= ronda; i++) {
  let jugadorUsuario = prompt(
    "Ingresa tu elección: piedra, papel o tijera"
  ).toLocaleLowerCase();
  let resultado = 0;
  let jugada = ["piedra", "papel", "tijera"];
  let indiceJugadorComputador = Math.floor(Math.random() * jugada.length);
  let jugadorComputador = jugada[indiceJugadorComputador];
 

  if (jugadorUsuario === jugadorComputador) {
    alert("Empate");
    resultado = "Empate";
  } else if (
    (jugadorUsuario === "piedra") & (jugadorComputador === "tijera") ||
    (jugadorUsuario === "papel") & (jugadorComputador === "piedra") ||
    (jugadorUsuario === "tijera") & (jugadorComputador === "papel")
  ) {
    alert("Ganaste");
    resultado = "Ganaste";
  } else {
 alert("Ganó la computadora, sigue jugando");
 resultado = "Ganó la computadora";
  }

  document.write(
    `<h3>Ronda ${i}, resultado: ${resultado}</h3><p>Resultado Jugador: ${jugadorUsuario}<br>Resultado Computadora: ${jugadorComputador} <br></p>`
  );
}
