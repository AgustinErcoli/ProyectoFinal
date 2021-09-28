let producto = prompt("Ingrese el producto");
let precio = prompt("Ingrese el precio del producto");
let cantidad = prompt("Ingrese la cantidad deseada");

class productos{
    constructor(producto, precio, cantidad) {
        this.nombre = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    guardar(){
    console.log("El producto es: " + this.nombre); 
    console.log("El precio es: $" + this.precio);
    console.log("La cantidad es: " + this.cantidad);
    console.log("El total es: $" + (this.precio * this.cantidad)); 
    }
}
const producto1 = new productos(producto, precio, cantidad);
producto1.guardar();