
//IIFE solicitada REQ 4
let animales = (() =>{
    const url = "https://crisbustose.github.io/AnimalesSalvajes/animales.json";
    //REQ3 consulta async, que se utilizara para obtener las imagenes en imagenes.js
    const getData = async () => {
        const response =  await fetch(url);
        const data = await response.json();
        return data;
    }

    return { getData };
})();

export default animales;