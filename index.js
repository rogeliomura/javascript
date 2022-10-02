
//FUNCIONES

function cotizar() {
    let paquetes = "Paquetes disponibles: \n" +
                    "1.- Paquete 1 \n" +
                    "2.- Paquete 2 \n" +
                    "3.- Paquete 3"

    let respuesta = prompt("Ingresa el # del Paquete para ver el precio: \n" + paquetes)
    switch (parseInt(respuesta)) {
        case 1:
            alert("Paquete elegido 'Paquete 1'. El precio del paquete es de $3000.00 MXN")
            break;
        case 2:
            alert("Paquete elegido 'Paquete 2'. El precio del paquete es de $5000.00 MXN")
            break;
        case 3:
            alert("Paquete elegido 'Paquete 3'. El precio del paquete es de $12000.00 MXN")
            break;
        default:
            alert("No se reconoce el # de Paquete.")
    }
    let continuar = confirm("¿Desea consultar el precio de otro paquete?")
    if (continuar) {
       cotizar()
    }
}