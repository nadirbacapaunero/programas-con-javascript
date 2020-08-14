function mostrarNombre(parametros) {
    var nombre = parametros.value;
    var saludo = "Hola " + nombre.toUpperCase();
    document.getElementById("resultado").innerHTML = saludo;
};