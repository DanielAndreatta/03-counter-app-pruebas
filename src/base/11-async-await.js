
// forma mas complicada

// const getImagenPromesa = () => new Promise (resolve => resolve ("https://asjdjasjdasd.com"))

// getImagenPromesa().then( console.log );


// forma mas simple con async
// const getImagen = async() => {

//     return "https://asjdjasjdasd.com";

// }
// getImagen().then( console.log );





// await


const getImagen = async() => {

    try {

        const apiKey = "d1oDCSmf0PbsaYxh7pt4DZFaVqwBjQHa";
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await respuesta.json(); // si data no estuviera desestructurado tendriamos q pone doble data abajo
        
        const {url} = data.images.original;
        
        const img = document.createElement(`img`);
        img.src = url;
        document.body.append (img);

    } catch (error) {
        //manejo del error
        console.error(error);
    }

}

getImagen();