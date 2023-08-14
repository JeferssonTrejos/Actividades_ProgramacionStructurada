
var numero1 = parseInt(prompt("Ingrese el primer número:"));
var numero2 = parseInt(prompt("Ingrese el segundo número:"));
var numero3 = parseInt(prompt("Ingrese el tercer número:"));

var ultimoDigito1 = numero1 % 10;
var ultimoDigito2 = numero2 % 10;
var ultimoDigito3 = numero3 % 10;


if (ultimoDigito1 === ultimoDigito2 && ultimoDigito2 === ultimoDigito3) {
  console.log("Los últimos dígitos de los tres números son iguales.");
} else {
  console.log("Los últimos dígitos de los tres números no son iguales.");
}
