const metersToFeet = 3.281;
const litersToGallons = 0.264;
const kilosToPounds = 2.205;

let meters = 0;
let feet = 0;
let lengthEl = document.getElementById("length-text");

let liters = 0;
let gallons = 0;
let volumeEl = document.getElementById("volume-text");

let kilos = 0;
let pounds = 0;
let massEl = document.getElementById("mass-text");

function newConvert(e) {
  feet = (e * metersToFeet).toFixed(3);
  meters = (e / metersToFeet).toFixed(3);
  liters = (e * litersToGallons).toFixed(3);
  gallons = (e / litersToGallons).toFixed(3);
  kilos = (e * kilosToPounds).toFixed(3);
  pounds = (e / kilosToPounds).toFixed(3);
  let lengthText = `${e} meters = ${feet}  feet  <br/> ${e} feet = ${meters} meters`;
  let volumeText = `${e} liters = ${gallons}  gallons  <br/> ${e} gallons = ${liters} liters`;
  let massText = `${e} kilos = ${pounds}  pounds  <br/> ${e} pounds = ${kilos} kilos`;
  lengthEl.innerHTML = lengthText;
  volumeEl.innerHTML = volumeText;
  massEl.innerHTML = massText;
}

document.getElementById("number-to-convert").addEventListener("keyup", (e) => {
  // setTimeout(() => {
  newConvert(e.target.value);
  // }, 0);
});
