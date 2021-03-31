import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-import-export";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    
    test('debe de retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);
 
        const heroeData = heroes.find( h => h.id ===id );

        expect( heroe ).toEqual( heroeData );
    })


    test('debe de retornar un undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined );
    })

    //debe de retornar un arreglo con lo heroes de DC
    // toEqual al arreglo filtrado

    test('debe de retornar un arreglo con lo heroes de DC', () => {
        
        const owner = "DC";
        const heroe = getHeroesByOwner(owner);
 
        const heroeData = heroes.filter( h => h.owner === owner );

        expect( heroe ).toEqual( heroeData );
    })


    // debe de retornar un arrgelo con los heroes de Marvel
    // length = 2

    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = "Marvel";
        const heroe = getHeroesByOwner(owner);
 
        expect( heroe.length ).toBe( 2 );
        
    })

})
