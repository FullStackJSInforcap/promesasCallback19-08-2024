import { heroes } from "./datos.js";

export const buscarHeroePorId = (id) => {
    return new Promise((resolve, reject) => {
        const heroeBuscado = heroes.find((heroe) => {
            return heroe.id === id;
        });        
        if(heroeBuscado){
            resolve(heroeBuscado);
        }
        reject(`Héroe con id ${id} no existe`);
    });
}