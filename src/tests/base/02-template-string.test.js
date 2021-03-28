import "@testing-library/jest-dom";

import { getSaludo } from '../../base/02-template-string';



describe("Pruebas en 02-template-string.js", () => {

    test('getSaludo debe retornar Hola Daniel!', () => {
        
        const nombre = "Daniel";

        const saludo = getSaludo ( nombre );

        expect ( saludo ).toBe( "Hola "+ nombre + "!");
    })
    
    // getSaludo debe de retornar Hola Carlos! -
    // si no hay argumento en nombre
    test('getSaludo debe retornar Hola Carlos! si nombre no recibe argumento', () => {
        
        const saludo = getSaludo ();

        expect ( saludo ).toBe( "Hola Carlos!" );

    })
    
})