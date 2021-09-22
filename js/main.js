
const TurnosDisponibles = 30;
const Limite = 30;
const TurnoNoDisponible = 13;

for (let i = 1; i <= TurnosDisponibles; i++) {

    if (i >= Limite) {
        break;
    }
    else if (i === TurnoNoDisponible) {
        continue;
    }

    let nombreCliente = prompt("Ingresa el nombre del cliente");
    alert(`${nombreCliente} tiene el turno N° ${i} `)
}