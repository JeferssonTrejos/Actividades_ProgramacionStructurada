//creamos la variable "numero" para despues utilizar "prompt" para que salga la ventana emergente
let numero = prompt("Ingresa un número:");
//aqui verificamos si los numeros ingresados son multplios de 7 y 11 simultaneamente utilizando el signo de % para determinar si un número es múltiplo de otro entonces el resultado de la división de un número por otro es 0, entonces el número es múltiplo del otro
if (isNaN(numero)) {
  alert("Por favor ingresa solo números.");
} else if (numero % 7 === 0 && numero % 11 === 0) {
  alert(`${numero} es múltiplo de 7 y 11.`);
} else {
  alert(`${numero} no es múltiplo de 7 y 11.`);
}
