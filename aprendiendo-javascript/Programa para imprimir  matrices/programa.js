
function generarMatrices(){
    var dato= null;
    /* Creo el  arrays individuales*/
    var a1= new Array();
     a1 [0]= "a";
     a1 [1]= "b";
     a1 [2]= "c";

     var a2= new Array();
     a2 [0]= "d";
     a2 [1]= "e";
     a2 [2]= "f";

     var a3= new Array();
     a3 [0]= "g";
     a3 [1]= "h";
     a3 [2]= "1";

    var a = new Array();
        a[0]= a1;
        a[1]= a2;
        a[2]= a3;


//recorrer la matriz
     for (let i = 0; i < a.length; i++) {
         //recorrer arreglo individual
         for (let j = 0; j < a[i].length; j++) {
             // imprimir cada elemento del arreglo
             dato= a[i] [j];
             imprimir(dato);
         }
       imprimir("<br/>")  
     } 


}
function limpiar() {
    document.getElementById("resultado").innerHTML = "";
}
function imprimir(valor) {
    document.getElementById("resultado").innerHTML += valor + " ";
}