const arraynumbers1 = [1, 2, 3];
const arraynumbers2 = [5, 7, 9];
let resultadoSuma = 0;
let resultadoSuma2 = 0;

export function sumaArrays(arraynumbers1, arraynumbers2) {
  for (let i = 0; i < arraynumbers1.length; i++) {
    let numero = arraynumbers1[i];
    resultadoSuma = resultadoSuma + numero;
  }
  for (let i = 0; i < arraynumbers2.length; i++) {
    let numero2 = arraynumbers2[i];
    resultadoSuma2 = resultadoSuma2 + numero2;
  }

  return resultadoSuma + resultadoSuma2;
}
export function reset() {
  resultadoSuma = 0;
  resultadoSuma2 = 0;
}
reset();
