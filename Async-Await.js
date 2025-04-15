async function ejecutar() {
    let promesa = new Promise((resolve) => {
        setTimeout(() => resolve("¡Hola desde la promesa!"), 1000);
    });

    let resultado = await promesa; // Espera a que se resuelva la promesa
    console.log(resultado);
}

ejecutar();
