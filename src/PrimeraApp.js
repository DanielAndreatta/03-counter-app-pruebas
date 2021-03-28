import React from 'react';
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';


// FC => Funtional Components

const PrimeraApp =  ( { saludo, subtitulo } ) => {


    return (
            <>
                <h1> { saludo } </h1>
                {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
                <p> {subtitulo} </p> 
            </>
    );    

}

//PropTypes
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

// Defaults Props
PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}

export default PrimeraApp;