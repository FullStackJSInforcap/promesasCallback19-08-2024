import { buscarHeroePorID } from "./callbacks.js";

console.log('Inicio programa');

buscarHeroePorID('5d86371fd55e2e2a30fe1ccb', (heroe) => {
    console.log(heroe);
});

console.log('Fin programa');


