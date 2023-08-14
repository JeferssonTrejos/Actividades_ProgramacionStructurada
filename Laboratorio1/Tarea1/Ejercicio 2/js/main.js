const numero = Number(prompt("Ingresa un numero: "));

//Comprobamos si el dato ingresado es un numero
if (!Number.isNaN(numero)) {
    //Variable que guardara la cantidad de divisores
    let numDivisores = null;

    //dividimos el numero desde 1 hasta el numero ingresado
    for (i = 1; i <= numero; i++) {
        //Contamos cuantos divisores tiene el numero
        //Si el resultado es un entero es un divisor
        resultado = numero / i;
        if (Number.isInteger(resultado)) {
            numDivisores++
        }
    };

    //Si el numero tiene mas de 2 divisores o menos, no es un numero primo
    if (numDivisores == 2) {
        console.log(`El numero: ${numero} SI es un numero primo`);
    } else if (numDivisores == null) {
        console.log(`Ingrese un dato`);
    } else {
        console.log(`El numero: ${numero} NO es un numero primo`);
    };
} else {
    //Si se ingresa un dato que no es un numero
    console.log("El dato ingresado no es un numero")
}




