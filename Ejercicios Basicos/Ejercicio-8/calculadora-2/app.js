var repetir = "";

function sumar(num1, num2) {
  alert("" + (num1 + num2));
}
function restar(num1, num2) {
  alert("" + (num1 - num2));
}
function multiplicar(num1, num2) {
  alert("" + num1 * num2);
}
function dividir(num1, num2) {
  alert("" + num1 / num2);
}
do {
  var operador1 = parseInt(prompt("numero"));
  var operacion = prompt("operacion");
  var operador2 = parseInt(prompt("numero"));

  if (operacion == "+") {
    sumar(operador1, operador2);
  } else if (operacion == "-") {
    restar(operador1, operador2);
  } else if (operacion == " *") {
    multiplicar(operador1, operador2);
  } else if (operacion == "/") {
    dividir(operador1, operador2);
  } else {
    alert("Error");
  }
} while (repetir == "");
