import "@testing-library/jest-dom";
import { getHeroeById } from "../../base/08-import-export";

describe('Pruebas en funciones de heroes', () => {
    
    test('debe de retornar un mobere por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);
 
        console.log(heroe);

    })
    
})
