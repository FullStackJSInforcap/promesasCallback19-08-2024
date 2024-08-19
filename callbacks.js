import { heroes } from "./datos.js"

let heroeBuscado = '';

const buscarHeroePorID = (id, callback) => {
    heroeBuscado = heroes.find((heroe) => {
        return heroe.id === id;
    });
    callback(heroeBuscado);
}

export{
    buscarHeroePorID
}