let dimensionArray = Number(prompt("Ingrese la capacidad de la sala:"));
let arraySala: boolean[] = new Array(dimensionArray);
let butacasVacias: number = 0;

for (let i = 0; i < dimensionArray; i++) {
  arraySala[i] = Math.random() < 0.5;
}

for (let i = 0; i < dimensionArray; i++) {
  if (arraySala[i] === false) {
    butacasVacias += 1;
  }
}

console.log(arraySala);
console.log("El número de butacas vacías es:", butacasVacias);
