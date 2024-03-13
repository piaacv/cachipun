let ronda = Number(prompt("Ingresa cantidad de rondas"));

for (let i = 1; i <= ronda; i++) {
  let jugadorUsuario = prompt(
    "Ingresa tu elección: piedra, papel o tijera"
  ).toLocaleLowerCase();
  let jugada = ["piedra", "papel", "tijera"];
  let indiceJugadorComputador = Math.floor(Math.random() * jugada.length);
  let jugadorComputador = jugada[indiceJugadorComputador];
  document.write(
    `Ronda ${i}<br>Resultado Jugador: ${jugadorUsuario}<br>Resultado Computadora: ${jugadorComputador} <br>`
  );

  if (jugadorUsuario === jugadorComputador) {
    alert("Empate");
  } else if (
    (jugadorUsuario === "piedra") & (jugadorComputador === "tijera") ||
    (jugadorUsuario === "papel") & (jugadorComputador === "piedra") ||
    (jugadorUsuario === "tijera") & (jugadorComputador === "papel")
  ) {
     alert("Ganaste");
  } else {
    alert("Ganó la computadora, sigue jugando");
  }
}
