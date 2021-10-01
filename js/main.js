const TASAFINANCIACION = 0.05;

let totalCompra = parseInt(prompt("Ingresar valor total de la compra a financiar"))
let cantidadCuotas = parseInt(prompt("Elija la cantidad de cuotas de financiación"))

const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const potencia = (a,b) => a ** b;

let cuotaMensual = dividir(multiplicar(totalCompra,TASAFINANCIACION),restar(1,potencia(sumar(1,TASAFINANCIACION),-cantidadCuotas)));

alert(`Usted va a pagar ${cantidadCuotas} cuotas de ${Math.round(cuotaMensual)} pesos cada una`);

class Capueat{
constructor (Nombre, Precio, Cantidad){
this.Nombre = Nombre;
this.Precio = Precio;
this.Cantidad = Cantidad;
    }
}

let activoCapueat1 = [];

activoCapueat1.push (new Capueat ("Niguiris", "$175", 4, 1));
activoCapueat1.push (new Capueat ("Rolls Especiales", "$530", 8, 1));
activoCapueat1.push (new Capueat ("Rolls Veganos", "$430", 8, 1));
activoCapueat1.push (new Capueat ("Rolls calientes vegetarianos", "$485", 8, 1));

console.log(activoCapueat1);