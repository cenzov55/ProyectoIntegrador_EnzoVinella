export class persona{
    public id?: number;
    public nombre: String;
    public apellido: String;
    public img: String;

    constructor(nombre: String,apellido: String,img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}