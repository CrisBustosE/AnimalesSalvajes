export default class Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        let _nombre = nombre;
        this.getNombre = () => _nombre;
        let _edad = edad;
        this.getEdad = () => _edad;
        let _img = img;
        this.getImg = () => _img;
        let _comentarios = comentarios;
        this.getComentarios = () => _comentarios;
        let _sonido = sonido;
        this.getSonido = () => _sonido;
        
    }
    getNombre(){
        return this.getNombre();
    }
    getEdad(){
        return this.getEdad();
    }
    getImg(){
        return this.getImg();
    }
    setComentarios(nuevoComentario){
        this._comentarios = nuevoComentario; 
    }
    getSonido(){
        return this.getSonido();
    }
}
