//Clases
import { Contador } from "./contador.js";

//DOM Elements
const countText = document.querySelector("h1");
const playStopButton = document.getElementById("Play-Stop");
const resetButton = document.getElementById("Reset");

//Declaraciones
let isPlay = false;
let miContador = new Contador();
let intervalo;

//Funciones
const togglePlayPauseButton = () => {
  const icon = playStopButton.querySelector("i");
  icon.classList.toggle("bi-play-fill", !isPlay);
  icon.classList.toggle("bi-pause", isPlay);
};
function updateCounter() {
  //func aux
  const pad = (n) => n.toString().padStart(2, "0");
  const format = (h, m, s) => `${pad(h)}:${pad(m)}:${pad(s)}`;
  // Declaraciones
  const h = Math.trunc(miContador.getValue() / 3600);
  const m = Math.trunc((miContador.getValue() % 3600) / 60);
  const s = miContador.getValue() % 60;
  miContador.incrementar();
  countText.textContent = format(h, m, s);
}

//Click en el boton 1
playStopButton.addEventListener("click", () => {
  isPlay = !isPlay;
  togglePlayPauseButton();
  if (isPlay) {
    updateCounter();
    intervalo = window.setInterval(updateCounter, 100);
  } else {
    window.clearInterval(intervalo);
  }
});
//Click en el boton 2
resetButton.addEventListener("click", () => {
  isPlay = false;
  miContador.reset();
  updateCounter();
  window.clearInterval(intervalo);
  togglePlayPauseButton();
});
