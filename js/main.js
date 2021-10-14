const TASAFINANCIACION = 0.05;

let totalCompra = parseInt(prompt("Ingresar valor total de la compra a financiar"))
let cantidadCuotas = parseInt(prompt("Elija la cantidad de cuotas de financiación"))

const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const potencia = (a,b) => a ** b;
const productos = [
    {
      id: 1,
      nombre: 'Combo clasico',
      descripcion:'12 o 24 piezas de rolls clasicos', 
      imagen: 'imagenes/rollsClasicos.png',
      precio: '590/1115',
      cantidad: 0
    },
    {
      id: 2,
      nombre: 'Combo Premium',
      descripcion:'12 o 24 piezas de rolls especiales', 
      imagen: 'imagenes/comboPremium.png',
      precio: '750/1500',
      cantidad: 0
    },
    {
      id: 3,
      nombre: 'Combo Veggie',
      descripcion:'12 o 24 piezas de rolls vegetarianos', 
      imagen: 'imagenes/veggies.jpg',
      precio: '570/1100',
      cantidad: 0
    },
    {
      id: 4,
      nombre: 'Combo Vegan',
      descripcion:'12 o 24 piezas de rolls veganos', 
      imagen: 'imagenes/rollsVeganos.png',
      precio: '600/1200',
      cantidad: 0
    }
];

class Carrito {
    constructor(cantidad){
        this.cantidad = parseInt(cantidad);
    }
    
    agregarAlCarrito(){
        this.cantidad ++;
    }
    quitarDelCarrito(cantidad){
        this.cantidad -= cantidad;
    }
}

//  CONSTANTES ELEMENTOS DEL DOM
const listadoProductos = document.getElementById("listado");
const precioElementos = document.getElementsByClassName("precio");
const contenedorCanasta = document.getElementById("canasta");
const arrayCanasta = [];
const arrayCarrito = [];
arrayCarrito.push(new Carrito(0));
const elementoCarrito = arrayCarrito[0];
const carritoLocalStorage = localStorage.getItem("carrito");

//  FUNCIONES 
/* Con esta función puedo eliminar productos de la canasta */
const eliminarProducto = (producto) => {
    elementoCarrito.quitarDelCarrito(producto.cantidad);
    producto.cantidad = 0;
    carritoHTML.innerHTML = elementoCarrito.cantidad;

    for (const productoCanasta of contenedorCanasta.children) {
      if (parseInt(productoCanasta.id) === parseInt(producto.id)) {
        productoCanasta.parentElement.removeChild(productoCanasta);
        
        // Use indexOf para obtener el índice de algún item de un Array
        const index = arrayCanasta.indexOf(producto);
  
        arrayCanasta.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
      }  
    }
  }
  
  /* 
  Con esta función puedo agregar productos del contenedor a la canasta 
  */
  const insertarCanasta = (producto) => {

    elementoCarrito.agregarAlCarrito();
    console.log(producto.nombre, producto.cantidad);

    if (producto.cantidad <= 0) {
        producto.cantidad++;

        let contenedor = document.createElement("div");
        contenedor.className = "producto-canasta";
        contenedor.id = producto.id;
        contenedor.innerHTML = `<img src="${producto.imagen}">
        <div class="descripcion-producto">
        <p id="cantidad-${producto.id}"> ${producto.nombre} x ${producto.cantidad}</p>
        <b> $ ${producto.precio}</b>
        </div>`
    
        /* 
        Inserto un elemento botón al elemento recientemente creado
        que contenga la función para poder eliminar el producto de la canasta
        */
        let boton = document.createElement("button");
        boton.className = "boton-eliminar";
        boton.innerHTML = "Eliminar";
        boton.onclick = () => eliminarProducto(producto);
        contenedor.appendChild(boton);
    
        contenedorCanasta.appendChild(contenedor);
        arrayCanasta.push(producto);
        localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
        //localStorage.setItem("carrito", JSON.stringify(canasta));
        
    } else {
        producto.cantidad++;
        let cantidadProducto = document.getElementById(`cantidad-${producto.id}`);
        cantidadProducto.innerHTML = ` ${producto.nombre} x ${producto.cantidad}`;
        const indexCanasta = arrayCanasta.indexOf(producto);
        arrayCanasta.splice(indexCanasta, 1);
        arrayCanasta.push(producto);
        localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
    }
    
  }

  const insertarCanastaLocalStorage = (producto) => {

    for (let index = 0; index < producto.cantidad; index++) {
        elementoCarrito.agregarAlCarrito();
    }

    carritoHTML.innerHTML = elementoCarrito.cantidad;
    let contenedor = document.createElement("div");
    contenedor.className = "producto-canasta";
    contenedor.id = producto.id;
    contenedor.innerHTML = `<img src="${producto.imagen}">
        <div class="descripcion-producto">
        <p id="cantidad-${producto.id}"> ${producto.nombre} x ${producto.cantidad}</p>
        <b> $ ${producto.precio}</b>
        </div>`
    
        /* 
        Inserto un elemento botón al elemento recientemente creado
        que contenga la función para poder eliminar el prodcuto de la canasta
        */
    let boton = document.createElement("button");
    boton.className = "boton-eliminar";
    boton.innerHTML = "Eliminar";
    boton.onclick = () => eliminarProducto(producto);
    contenedor.appendChild(boton);
    
    contenedorCanasta.appendChild(contenedor);
    arrayCanasta.push(producto);
    localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
  }
  
  /* 
    Función para crear productos dinámicamente y crearlos en el contenedor 
  */
  const insertarProductos = () => {
    for (const producto of productos) {
      let contenidoProducto = document.createElement("div");
      contenidoProducto.className = "row justify-content-center container__favoritos-box";
      contenidoProducto.id = producto.id;

    if (producto.id % 2 == 1) {
        contenidoProducto.innerHTML = `
        <div class="col-12 col-md-6 container__favoritos-sushiDescripcion">
            <div class="contenedorCartas">
                <h2 class="contenedorCartas__titulo">${producto.nombre}</h2>
                <p class="contenedorCartas__texto"> ${producto.descripcion} </p>
                <p class="contenedorCartas__precio">$${producto.precio}</p>
                <button class="contenedorCartas__enlace" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="boton-${producto.id}">Comprar</button>
            </div>
          </div>
          <div class="col-12 col-md-6 container__favoritos-sushiImagen">
            <img class="container__sushiImagen-img" src="${producto.imagen}">
          </div>
    </div>`;
    } else {
        contenidoProducto.innerHTML = `
      <div class="col-12 col-md-6 container__favoritos-sushiImagen oreder-md-1 order-2">
      <img class="container__sushiImagen-img" src="${producto.imagen}">
    </div>
    <div class="col-12 col-md-6 container__favoritos-sushiDescripcion order-md-2 order-1">
      <div class="contenedorCartas">
        <h2 class="contenedorCartas__titulo">${producto.nombre}</h2>
        <p class="contenedorCartas__texto"> ${producto.descripcion} </p>
        <p class="contenedorCartas__precio">$${producto.precio}</p>
        <button class="contenedorCartas__enlace" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="boton-${producto.id}">Comprar</button>
      </div>
    </div>`;    
    }

      listadoProductos.appendChild(contenidoProducto);
    }
  }

  const inicializarProductos = (productoLocal) => {
    for (const producto of productos){
        if (producto.id == productoLocal.id) {
            producto.cantidad = productoLocal.cantidad;
            insertarCanastaLocalStorage(producto);
        }
    }
  }

  const comprar = () => {
    for (const producto of productos){
        let boton = document.getElementById(`boton-${producto.id}`);     
        boton.onclick = () => {
            insertarCanasta(producto);
            carritoHTML.innerHTML = elementoCarrito.cantidad;
        } 
            
    }
  }

  //CÓDIGO
  let carritoHTML = document.getElementById("cantidadEnElCarrito");
  let carritoParse;

  insertarProductos();
  comprar();

  if (carritoLocalStorage) {
    carritoParse = JSON.parse(carritoLocalStorage);

    for (const producto of carritoParse) {
        inicializarProductos(producto);
    }
  }