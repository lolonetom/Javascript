function respuestaUno() {
    let resultado = "1";
    return resultado;
}

function respuestaDos() {
    let resultado = "2";
    return resultado;
}

function respuestaTres() {
    let resultado = "3";
    return resultado;
}

function respuestaCuatro() {
    let resultado = "4";
    return resultado;
}

function mostrarPregunta() {
    let opcion = prompt("¿Qué fue lo último que hizo Napoleón?  \n 1. Ganar \n 2. Comer \n 3. Regresar a casa \n 4. Morirse")
    return opcion;
}

function pregunta() {
    let opcionSeleccionada = mostrarPregunta()
    while (opcionSeleccionada !== "4") {
        if (opcionSeleccionada !== "") {
            opcionSeleccionada = parseFloat(opcionSeleccionada)

            switch (opcionSeleccionada) {

                case 1:
                    let primerRespuesta = respuestaUno;
                    break;

                case 2:
                    let segundaRespuesta = respuestaDos;
                    break;

                case 3:
                    let tercerRespuesta = respuestaTres;
                    break;

                case 4:
                    let cuartaRespuesta = respuestaCuatro;
                    break;

                default:
                    alert("Opcion incorrecta");
                    break;
            }
        } else {
            alert("intente de nuevo")
        }
        opcionSeleccionada = mostrarPregunta()
    }
}

pregunta()