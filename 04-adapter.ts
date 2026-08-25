// Crear una clase InventarioViejo que tenga un método agregarItem.
// Definir explícitamente la interfaz Inventario (el contrato objetivo, con agregarEquipo y listarEquipos) que espera el sistema nuevo.
// Implementar una clase AdaptadorInventario que implemente esa interfaz y permita utilizar InventarioViejo (con su método agregarItem)
//  donde el sistema nuevo espera un Inventario, traduciendo las llamadas internamente.
class InventarioViejo {
    private items: any[] = [];

    agregarItem(item: any): void {
        this.items.push(item);
    }

    obtenerItems(): any[] {
        return this.items;
    }
}
interface Inventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): any[];
}
class AdaptadorInventario implements Inventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
        const nuevoItem = { nombre, tipo, estado };
        this.inventarioViejo.agregarItem(nuevoItem);
    }

    listarEquipos(): any[] {
        return this.inventarioViejo.obtenerItems();
    }
}


const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]



