console.log("Inicio");

function saludar(nombre, callback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        callback(); // Llamamos al callback cuando termine de saludar
    }, 2000);
}

function despedir() {
    console.log("Adiós!");
}

saludar("Florencia", despedir); // Pasamos 'despedir' como callback

console.log("Fin");

