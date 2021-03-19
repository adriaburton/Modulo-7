var notaAprobado = 5;

var nota = prompt("Introduce la nota de examen");

if (nota >= notaAprobado) {
  alert("Has aprobado el examen con un" + " " + nota);
}

if (nota < notaAprobado) {
  alert("Has suspendido el examen con un" + " " + nota);
}
