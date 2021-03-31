import React from 'react';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en el componente <CounterApp />', () => {
    
    test('debe mostrar <CounterApp /> correctamente', () => {
        
        const wrapper = shallow( <CounterApp value={ 10 } />);

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe mostrar el valor por defecto de 100', () => {
      
        const wrapper = shallow( <CounterApp value={ 100 } />);

        const counterText = wrapper.find('h2').text().trim();
        
        expect( counterText ).toBe("100");

    })
    
    

})