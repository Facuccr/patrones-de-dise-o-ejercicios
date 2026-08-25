abstract class Equipo{
    nombre: string;
    ram: string;
    procesador:string;

    constructor(nombre: string,
    ram: string,
    procesador:string){
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    abstract detalles():string;
}

class Notebook extends Equipo {

    detalles():string{
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador} `
    }
}

class Desktop extends Equipo {
    
    detalles():string{
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador} `
    }
}

class Servidor extends Equipo {
    detalles():string{
        return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador} `
    }
}

