
function contarVocales(cadena) {
    var vocales = "aeiouAEIOU";
    var contador = 0;
  
    for (var i = 0; i < cadena.length; i++) {
      if (vocales.indexOf(cadena[i]) !== -1) {
        contador++;
      }
    }
  
    return contador;
  }
  
  var input = prompt("Ingrese un string:");

  var cantidadVocales = contarVocales(input);
  

  console.log("El string contiene " + cantidadVocales + " vocales.");
  