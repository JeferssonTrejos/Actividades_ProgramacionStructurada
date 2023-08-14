let tiempo = Number(prompt("Ingresa un numero:"))

//COMPROBAMOS SI EL DATO INGRESADO ES UN NUMERO
if (!Number.isNaN(tiempo)) {
    //llamamos a la funcion
    numerosAhoras(tiempo);
}else{
    console.log("El dato ingresado no es un numero, ingresa un numero")
}


//Funcion que convertira los numero a horas y minutos
function numerosAhoras(time) {
    let hora = 0;
    let minutos = 0;

    for (i = 1; i <= time; i++) {
        //guardamos los minutos en una variable
        minutos++
        //si minutos es 60, aumentaremos la hora en 1 
        //y restablecemos los minutos a 0 
        if (minutos == 60) {
            minutos = 0;
            hora++
        }
    }
    //Mostramos los resultado en consola
    console.log("Horas: " + hora)
    console.log("Minutos: " + minutos)
    console.log(hora + ":" + minutos)
}

