class Avenger {
    nombre:string;
    equipo:string;
    nombreReal:string

    puedePelear:boolean;
    peleasGanadas:number;

    constructor(nombre:string,equipo:string,nombreReal:string){
        this.nombre = nombre;
        this.equipo= equipo;
        this.nombreReal = nombreReal;
    }
}

let antman:Avenger = new Avenger("antman","cap","Scott Lang");

console.log(antman);