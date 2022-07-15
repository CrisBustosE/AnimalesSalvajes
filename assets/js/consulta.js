
//IIFE solicitada REQ 4
let animales = (() =>{
    const url = "http://127.0.0.1:5500/PruebaModulo4-AnimalesSalvajes-CristobalBustos/animales.json";
    //REQ3 consulta async, que se utilizara para obtener las imagenes en imagenes.js
    const getData = async () => {
        const response =  await fetch(url);
        const data = await response.json();
        return data;
    }

    return { getData };
})();

export default animales;