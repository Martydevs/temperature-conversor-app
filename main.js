import { toFahrenheit, toKelvin } from "./utils.js";

const temperature = document.getElementById("user-input");
const convertBtn = document.getElementById("temperature-convert");
const resetBtn = document.getElementById("temperature-clean");
const fahrenheitSpan = document.getElementById("fahrenheit-output");
const kelvinSpan = document.getElementById("kelvin-output");

convertBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (temperature.value !== "") {
    fahrenheitSpan.textContent = toFahrenheit(parseInt(temperature.value));
    kelvinSpan.textContent = toKelvin(parseInt(temperature.value));
  } else {
    alert("Please enter a temperature");
  }
});

resetBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  fahrenheitSpan.textContent = "";
  kelvinSpan.textContent = "";
  temperature.value = "";
});
