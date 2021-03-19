var repetir = "si";

function sumar(num1, num2) {
  alert("Resultado" + (num1 + num2));
}
function restar(num1, num2) {
  alert("Resultado" + (num1 - num2));
}
function multiplicar(num1, num2) {
  alert("Resultado" + num1 * num2);
}
function dividir(num1, num2) {
  alert("Resultado" + num1 / num2);
}
do {
  var operacion = prompt("elige operacion a realizar");

  var operador1 = parseInt(prompt("Introduce el primer numero"));

  var operador2 = parseInt(prompt("Introduce el segundo numero"));

  if (operacion == "sumar") {
    sumar(operador1, operador2);
  } else if (operacion == "restar") {
    restar(operador1, operador2);
  } else if (operacion == " multiplicar") {
    multiplicar(operador1, operador2);
  } else if (operacion == "dividir") {
    dividir(operador1, operador2);
  } else {
    alert("Error, no se realizar esta opreración soy un poco lerdo");
  }

  repetir = prompt("Quieres ejecutar otra operacion?");
} while (repetir == "si");
