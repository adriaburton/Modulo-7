class Calculadora {
  constructor(operadorPrevioTextElement, operadorTextElement) {
    this.operadorPrevioTextElement = operadorPrevioTextElement;
    this.operadorTextElement = operadorTextElement;
    this.clear();
  }
  reinicio() {
    this.operador = "";
    this.operadorPrevio = "";
    this.operacion = "undefined";
  }

  borrar() {}

  añadirNumero(numero) {
    this.operador = numero;
  }
  elegirOperacion(operadores) {}

  computar() {}

  actualizarDisplay() {
    this.operadorTextElement.innerText = this.operador;
  }
}

const botonesNumero = document.querySelectorAll("[numero]");
const botonesOperadores = document.querySelectorAll("[operadores]");
const botonIgual = document.querySelector("[igual]");
const botonBorrar = document.querySelector("[borrar]");
const botonReinicio = document.querySelector("[reinicio]");
const operadorPrevioTextElement = document.querySelector("[operador-previo]");
const operadorTextElement = document.querySelector("[operador]");

const calculadora = new calculadora(
  operadorPrevioTextElement,
  operadorTextElement
);
botonesNumero.forEach((button) => {
  button.addEventListener("click", () => {
    calculadora.añadirNumero(button.innerText);
    calculadora.actualizarDisplay();
  });
});
