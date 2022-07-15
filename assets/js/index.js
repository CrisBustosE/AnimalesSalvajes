import { Leon, Lobo, Oso, Serpiente, Aguila } from './clases/animales.js'

let animalesRegistrados = [];

document.querySelector("#btnRegistrar").addEventListener("click", () => {
    //ids: animal, edad,comentarios,preview;
    let animal = document.querySelector("#animal");
    let edad = document.querySelector("#edad");
    let comentarios = document.querySelector("#comentarios");
    let preview = document.querySelector("#preview img");

    let registrarAnimal;

    if (animal.value && edad.value && comentarios.value && preview.src){
        switch (animal.value) {
            case 'Leon':
                registrarAnimal = new Leon(animal.value, edad.value, preview.src, comentarios.value);
                break;
            case 'Lobo':
                registrarAnimal = new Lobo(animal.value, edad.value, preview.src, comentarios.value);
                break;
            case 'Oso':
                registrarAnimal = new Oso(animal.value, edad.value, preview.src, comentarios.value);
                break;
            case 'Serpiente':
                registrarAnimal = new Serpiente(animal.value, edad.value, preview.src, comentarios.value);
                break;
            case 'Aguila':
                registrarAnimal = new Aguila(animal.value, edad.value, preview.src, comentarios.value);
                break;
        }
        animalesRegistrados.push(registrarAnimal);
        recargarTabla();
        // Reiniciamos los datos de la tabla
         animal.selectedIndex = 0;
         edad.selectedIndex = 0;
         comentarios.value = "";
         preview.src = "";
    }else{
        alert("Faltan datos por llenar");
    }

})
const recargarTabla = () =>{
    const animalesTemplate = document.querySelector("#Animales");
    animalesTemplate.innerHTML = "";
    animalesRegistrados.forEach((a,i)=>{
        animalesTemplate.innerHTML +=`<div class="px-3 pb-2 participante" data-animal="${a.getNombre()}">
        <div class="card" style="background-color:#343a40;">
            <input type="image" src="${a.getImg()}" class="card-img-top" style="width:267px;height:302px;" data-toggle="modal" data-target="#exampleModal" onclick="Modal('${i}')">

            <button type="button" class="btn" style="background-color:#6C757D; width:267px;" onclick="Sonido('${i}')"><img width="50px" src="./assets/imgs/audio.svg"><audio src="${a.getSonido()}"></audio></button>
      </div>
    </div>`
    })
}

window.Sonido = (i) =>{
    const animalSonido = animalesRegistrados[i];
    new Audio(animalSonido.getSonido()).play();
}

window.Modal = (i) =>{
    const animalDatos =  animalesRegistrados[i];
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = `<div class="text-center">
    <img src="${animalDatos.getImg()}" class="card-img-top p-2"/>
    <h4 style="color: white;">${animalDatos.getEdad()}</h3>
    <h4 style="color: white;">Comentarios</h3>
    <hr>
    <h5 style="color: white;">${animalDatos.getComentarios()}</h5>  
    </div>`
}
