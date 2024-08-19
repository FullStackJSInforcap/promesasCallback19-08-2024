import { buscarHeroePorID } from "./callbacks.js";

const mostrarConsola = (heroe) => {
    console.log(heroe);
}

// por consola
buscarHeroePorID('5d86371f1efebc31def272e2', mostrarConsola);

buscarHeroePorID('5d86371f1efebc31def272e2', (heroe) => {
    console.log(heroe);
});

buscarHeroePorID('5d86371f1efebc31def272e2', (heroe) => {
    const parrafoHeroe = document.querySelector('#parrafoHeroe');
    parrafoHeroe.innerHTML = `Id: ${heroe.id}, Nombre: ${heroe.name}`;
})

// por front
/* const parrafoHeroe = document.querySelector('#parrafoHeroe');
parrafoHeroe.innerHTML = `Id: ${heroe.id}, Nombre: ${heroe.name}`; */
