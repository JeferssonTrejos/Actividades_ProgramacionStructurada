//Funcion para validar de los numeros
function isValidNumber(num){
    switch(true){
        case isNaN(num) || num.trim() == "" || num == null:
            return isValidNumber(prompt('El valor ingresado no es valido, debe de ser un numero:'));
            break
        case num <= 0:
            return isValidNumber(prompt('El numero ingresado debe de ser mayor a 0:'));
            break
        default:
            return num
    };
};


//Funcion para encontrar numeros divisibles 
function evenlyDivisible(start,end,divisor,dividers){
    if(start <= end){
        if(start%divisor == 0){
            dividers.push(start);
        }
        start++
        evenlyDivisible(start,end,divisor,dividers);
    };
    return dividers
};


//Parametros
const numbers = [
    isValidNumber(prompt('Ingrese el inicio del rango:')),
    isValidNumber(prompt('Ingrese el final del rando:')),
    isValidNumber(prompt('Ingrese el divisor:')) 
];

//Mostrando resultados
const numDivisible = evenlyDivisible(numbers[0],numbers[1],numbers[2],dividers=[]);

if(numDivisible.length == 0){
    console.log('---- Arreglo vacio ----');
}else{
    console.log("---- Resultados ----")
    console.log(`Inicio del rango: ${numbers[0]}`);
    console.log(`Final del rango: ${numbers[1]}`);
    console.log(`Divisor: ${numbers[2]}`);
    console.log(numDivisible);
};
