
import {getHeroeById} from './08-import-export'


export const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject)=>{

        setTimeout( () => {
            const p1 = getHeroeById(id);
            //console.log(heroe);
            if (p1){
                resolve(p1);
            }else {
                reject("no se pudo encontrar el heroe");
            }
        }, 1500 )
    });

    //return promesa;
} 
