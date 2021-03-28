
//Funciones en JS

//const nombre = "Daniel";


//no se usa porque se puede perder la referencia
// function saludar(nombre){
//     return `Hola ${nombre}`;
// };

// saludar = 30;

const saludar = function(nombre){
    return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo`;

// const getUser = () => {
//     return {
//         uid: "ABC123",
//         username: "EL_Papi1502"
//     }
// }

export const getUser = () => ({
        uid: "ABC123",
        username: "EL_Papi1502"
});



export const getUsuarioActivo = (nombre) => ({
        uid: "ABC123",
        username: nombre
});

