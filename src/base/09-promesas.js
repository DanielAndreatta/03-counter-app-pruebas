


import {getHeroeById} from './bases/08-import-export'

// const promesa = new Promise((resolve, reject)=>{

//     setTimeout( () => {
//         const p1 = getHeroeById(2);
//         //console.log(heroe);
//         //resolve(p1);
//         reject("no se pudo encontrar el heroe");
//     }, 2000 )
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(error => console.warn(error));


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject)=>{

        setTimeout( () => {
            const p1 = getHeroeById(id);
            //console.log(heroe);
            if (p1){
                resolve(p1);
            }else {
                reject("no se pudo encontrar el heroe");
            }
        }, 2000 )
    });

    //return promesa;
} 

getHeroeByIdAsync(10)
                    .then( console.log )
                    //.then( heroe => console.log("heroe", heroe))
                    .catch( console.warn )
                    //.catch( error => console.warn(error) )