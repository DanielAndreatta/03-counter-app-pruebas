
//formas de importar archivo
//import { heroes } from "./data/heroes"
// import moduleName from 'module'  -> escribiendo imp y rellenando los datos
//import moduleName from 'data/heroes.js';
import heroes from '../data/heroes';


export const getHeroeById = (id) => heroes.find ((heroe)=>heroe.id===id);


export const getHeroesByOwner = (owner) => heroes.filter((heroe)=>heroe.owner === owner)
