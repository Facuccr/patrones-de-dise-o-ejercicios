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
    }s
}