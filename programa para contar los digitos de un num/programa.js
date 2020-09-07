
document.write('<br/>Programa para contar la cantidad de digitos de un numero enteros positivos');
var num = parseInt(prompt('proporciona un numero entero positivo', 1));

var contador_digitos = 0;

while (num >= 1){
    num = num /10;
    contador_digitos ++;
};
document.write(`<br/>El numero proporcionado contiene ${contador_digitos} digitos` );
