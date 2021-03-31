
// forma mas complicada

// const getImagenPromesa = () => new Promise (resolve => resolve ("https://asjdjasjdasd.com"))

// getImagenPromesa().then( console.log );


// forma mas simple con async
// const getImagen = async() => {

//     return "https://asjdjasjdasd.com";

// }
// getImagen().then( console.log );





// await


export const getImagen = async() => {

    try {

        const apiKey = "vgcxgEr9TkGKQHfTyQjDTtnnpBou4NSt";
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await respuesta.json(); // si data no estuviera desestructurado tendriamos q pone doble data abajo
        
        const {url} = data.images.original;
        
        return url;

    } catch (error) {
        //manejo del error
        //console.error(error);
        return "No existe";
    }

}
