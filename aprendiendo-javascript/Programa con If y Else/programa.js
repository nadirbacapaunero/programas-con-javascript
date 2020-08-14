function determinaClasificacionPorEdades(entrada){
    var resultado = null;
    var edad = entrada.value;

    if(edad > 0 && edad < 12){
        resultado= "AA, A";

    }
    else if( edad >= 12 && edad < 15) {
        resultado= "B, AA,  A";
    }
    else if( edad >= 15 && edad < 18){
        resultado= "B15, AA, A";
    }
    else if(edad >= 18 && edad < 21){
        resultado= "C, B15, AA;  A";
    }
    else if (edad >= 21 && edad <= 122){
        resultado= "Puedes ver cualquier tipo de pelicula";
    }
    else if (edad > 122){
        resultado= "No creo que exista !!";
    }
    else{
        resultado= "valor erroneo, coloca otro valor";
    }
    document.getElementById("resultado").innerHTML = resultado;

};