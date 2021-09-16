let nombreDeComida = prompt("Que vas a querer comer?");

if ((nombreDeComida == "Niguiris") || (nombreDeComida == "niguiris") || (nombreDeComida == "NIGUIRIS")) {
    alert("Es una buena eleccion si te gusta lo simple");
} else if ((nombreDeComida == "Rolls Clasicos") || (nombreDeComida == "Rolls clasicos") || (nombreDeComida == "ROLLS CLASICOS") || (nombreDeComida == "rolls clasicos")) { 
    alert("Es una buena opcion si te gusta lo clasico");
} else if ((nombreDeComida == "Rolls Vegetarianos") || (nombreDeComida == "Rolls vegetarianos") || (nombreDeComida == "ROLLS VEGETARIANOS") || (nombreDeComida == "rolls vegetarianos")) {
    alert("Es una buena elecion si eres vegetariano/a");
} else if ((nombreDeComida == "Rolls Veganos") || (nombreDeComida == "Rolls veganos") || (nombreDeComida == "ROLLS VEGANOS") || (nombreDeComida == "rolls veganos")) {
    alert("Es una buena eleccion si eres vegano/a");
    console.log(nombreDeComida + " no tienen nigun ingrediente proveniente de animales!")
} else {
    alert("No tenemos ningun platillo llamado " +nombreDeComida+ ". Debrias revisar nuestro menu nuevamente.")
}