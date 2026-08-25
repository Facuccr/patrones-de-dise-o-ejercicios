interface Observador {
    notificar(nombreEquipo: string, nuevoEstado: string): void;
}