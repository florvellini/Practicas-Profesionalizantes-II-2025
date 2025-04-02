let promesa = new Promise((resolve, reject) => {
    let exito = true; // Cambia a false para ver un error
    if (exito) {
        resolve("¡Todo salió bien!");
    } else {
        reject("Hubo un error");  // Este es un comentario nuevo

    }
});

promesa
    .then((resultado) => {
        console.log(resultado); // Si todo salió bien
    })
    .catch((error) => {
        console.log(error); // Si hubo un error
    });
