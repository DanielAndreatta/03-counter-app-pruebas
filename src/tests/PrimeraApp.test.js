import React from 'react'; 
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import PrimeraApp from '../PrimeraApp';



describe('Pruebas en <PrimeraApp />', () => {
    
    // test('debe de mostrar el mensaje "Hola, soy Daniel"', () => {
    //     const saludo = "Hola, soy Daniel";
    //     const { getByText } = render( <PrimeraApp saludo={ saludo }/>);
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp /> correctamente', () => {
       
        const saludo = "Hola, soy Daniel";
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );
        
        expect( wrapper ).toMatchSnapshot();

    });


    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = "Hola, soy Daniel";
        const subTitulo = "Soy un subtitulo";

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subTitulo }    
            /> 
        );

        const textoParrafo = wrapper.find("p").text();
        
        expect( textoParrafo ).toBe( subTitulo );
        
    })
    
    


    

})
