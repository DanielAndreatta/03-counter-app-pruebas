import React, {useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ( { value = 10 } ) => {

    const [ counter, setCounter ] = useState( value );
    
    
    //handleAdd 
    const handleAdd = () => {
        
        setCounter( counter+1 );
        
        //otra forma de realizar
        //setCounter( (c) => c+1  ) 
    }

    //handleDecr 
    const handleDecr = () => {        
        setCounter( counter-1 );

    }

    //handleReset 
    const handleReset = () => {
        setCounter( value  );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter } </h2>

            <button onClick={ handleDecr }>-1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleAdd }>+1</button>
            
            
        </>

    )

}

export default CounterApp;

CounterApp.propTypes = {

    value: PropTypes.number.isRequired
}
