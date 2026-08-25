interface Observador {
    notificar(nombreEquipo: string, nuevoEstado: string): void;
}


class Soporte implements Observador{
    notificar(nombreEquipo: string, nuevoEstado: string): void{
        console.log(`Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${nuevoEstado}`);
    }
}

class Equipo {
    nombre: string;
    tipo: string;
    estado: string;
    private observadores: Observador[] = []


    constructor(nombre: string, tipo: string, estado: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }
    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

   
    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(observador => {
            observador.notificar(this.nombre, this.estado);
        });
    }
}


const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.