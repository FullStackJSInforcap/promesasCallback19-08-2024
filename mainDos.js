import { buscarHeroePorId } from "./promesas.js";

console.log('Inicio de programa');

console.time('buscarHeroe');
/* buscarHeroePorId('5d86371f1efebc31def272e2')
    .then((heroeUno) => {
        buscarHeroePorId('5d86371f2343e37870b91ef1')
            .then((heroeDos) => {
                console.log(heroeUno, heroeDos);                
            }).catch((error) => {
                console.log(error);
            });
    }).catch((error) => {
        console.log(error);
    }); */
Promise.all([buscarHeroePorId('5d86371f1efebc31def272e'), buscarHeroePorId('d86371f2343e37870b91ef1')])
    .then(heores => console.log(heores[0], heores[1]))
    .catch(error => console.log(error));
console.timeEnd('buscarHeroe');

console.log('Término de programa');