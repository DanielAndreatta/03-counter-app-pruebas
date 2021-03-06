import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-desetruc-arreglo";

describe("Pruebas en desestructuracion", () => {

    test('debe de retornar un string y un numero', () => {
      
        //const arr = retornaArreglo(); //["ABC",123 ]

        //expect( arr ).toEqual( ["ABC",123 ] );

        const [ letras, numeros ] = retornaArreglo();

        expect( letras ).toBe( "ABC" );
        expect( typeof letras ).toBe( "string" );

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( "number" );        
    })


})