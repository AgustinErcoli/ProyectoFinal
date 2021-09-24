let precioDelPedido = parseInt(prompt('Ingrese el valor del/los producto/s'));
let propina = prompt('Indique el porcentaje de propina que quiera agregar');

const porcentajePropina = (a, b) => a * b;

const propinaIncluida = () => {
    let salida;
    if(propina == '10%' || propina == 10){
        salida = parseFloat(1.10);
    } else if(propina == '15%' || propina == 15){
        salida = parseFloat(1.15);
    } else if(propina == '20%' || propina == 20){
        salida = parseFloat(1.20);
    }
    return salida;
}

const calcularPropina = () => {

    alert(`El valor total es ${parseInt(porcentajePropina(precioDelPedido, propinaIncluida()))}`);
    console.log(porcentajePropina(precioDelPedido, propinaIncluida()));
    
}

calcularPropina();