import React from 'react';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en el componente <CounterApp />', () => {
    
    let wrapper = shallow( <CounterApp />);

    //se realiza antes de cada prueba
    beforeEach( () => {

        wrapper = shallow( <CounterApp />);

    });


    test('debe mostrar <CounterApp /> correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe mostrar el valor por defecto de 100', () => {
      
        const wrapper = shallow( <CounterApp value={ 100 } />);

        const counterText = wrapper.find('h2').text().trim();
        
        expect( counterText ).toBe("100");

    })

    test('debe incrementar con el boton +1', () => {
        
        wrapper.find('button').at(2).simulate('click');
    
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( "11" );
    })
    
    test('debe decrementar con el boton -1', () => {
        
        wrapper.find('button').at(0).simulate('click');
    
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( "9" );
    })
  
    test('debe colocar el valor por defecto con el boron reset', () => {
        
        const wrapper = shallow( <CounterApp value={ 105 } />);

        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');        
        const counterText = wrapper.find('h2').text().trim();
        
        expect( counterText ).toBe( "105" );
    })
    

})