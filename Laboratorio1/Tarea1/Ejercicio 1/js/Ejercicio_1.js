//Aqui utilizamos "prompt Para que salga la ventana emergente que nos pide la base del rectangulo"
let base = prompt("Ingresa la base del rectángulo:");
let altura = prompt("Ingresa la altura del rectángulo:");
//utilizamos "isNaN" para comprbar que los valores que ingreso el usuario son numeros o no 
if (isNaN(base) || isNaN(altura)) {
  alert("Por favor ingresa solo números.");
} else {
  let area = base * altura;
  let perimetro = 2 * (base + altura);
  //utilizamos alert para mostrar el resultado del cálculo del área y el perimetro del rectangulo 
  alert(`El área del rectángulo es ${area} y el perímetro es ${perimetro}`);
}