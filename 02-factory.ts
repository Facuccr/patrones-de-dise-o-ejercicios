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


class EquipoFactory{
    crearEquipo(tipo: string,nombre: string,ram:string,procesador: string): Equipo{ 
        switch (tipo.toLowerCase()) {
            case 'notebook':
                return new Notebook(nombre, ram, procesador);
            case 'desktop':
                return new Desktop(nombre, ram, procesador);
            case 'servidor':
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error("Tipo de equipo no soportado");
        }
    }
}


const factory = new EquipoFactory();
const unaNotebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(unaNotebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7