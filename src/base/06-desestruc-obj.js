
// Desestructuracion
// Asignacion desestructurante

const persona = {
    nombre:"Tony",
    edad: 45,
    clave: "Iroman"
};


// const {nombre, edad,clave} = persona; 

// console.log(nombre);
// console.log(edad);
// console.log(clave);
// console.log(persona.edad);
// console.log(persona.clave);

// const retornaPersona = (usuario) => {

//     console.log(usuario)

// };

const retornaPersona = ({nombre, edad, rango="capitán"}) => {

    console.log(nombre, edad, rango)

};

retornaPersona(persona);


const userContext = ({clave, nombre, edad, rango="capitán"}) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {  //objeto dentro del objeto que retorno
            lat: 1232342,
            lng: 42424
        }
    }
};

const {nombreClave, anios, latlng:{lat,lng}} = userContext(persona);
//otra forma seria la siguiente
// const {nombreClave, anios, latlng} = userContext(persona);
// const {lat, lng} = latlng;

console.log(nombreClave,anios);
console.log(lat,lng);

