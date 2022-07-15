import Animales from './consulta.js';

const { animales } = await Animales.getData();

//Quitamos padding para que las imagenes se vean bien
document.querySelector("#preview").parentNode.classList.remove("p-5");


document.querySelector("#animal").addEventListener("change",(e)=>{
    //Normalizamos las tildes de Aguila por ejemplo para evitar problemas de ficheros
    const nombreAnimal = e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const imagenAnimal =  animales.find((tar)=> tar.name == nombreAnimal).imagen;

    document.querySelector("#preview").innerHTML = `<img class="center" src ="./assets/imgs/${imagenAnimal}" />`;
})



