
export interface itemSales {
    item: string;
    cost: number;
}

export interface Ventas {
    uuid: string;
    client: string;
    fecha: string;
    car: string;
    package: boolean,
    finalized: boolean;

}

export class Venta {
    salesId: number;
    clienteNombre: string;
    descripcion: string;
    telefono: string;
    isPaquete: boolean;
    paqueteId: number;
    servicioIds: Array<Number> = [1];
    servicioList: Array<itemSales> = [];
    itemSale: itemSales = { item: '', cost: 0 };

    constructor() {
        this.salesId = 0;
        this.clienteNombre = '';
        this.descripcion = '';
        this.telefono = '';
        this.isPaquete = false;
        this.paqueteId = 0;

    }
    SetValues(salesId: number, clienteNombre: string, descripcion: string, telefono: string, isPaquete: boolean, paqueteId: number, iDS: number[]) {
        this.salesId = salesId;
        this.clienteNombre = clienteNombre;
        this.descripcion = descripcion;
        this.telefono = telefono;
        this.isPaquete = isPaquete;
        this.paqueteId = paqueteId;
        this.servicioIds = iDS;

    }

    pushItemSale(item?: string, cost?: number) {
        this.itemSale.item = item!;
        this.itemSale.cost = cost!;
        this.servicioList.push(this.itemSale);
    }
    pushItemSale2(entity: itemSales) {
        this.servicioList.push(entity);
    }

}

export interface VentaDetalle {
    uuid: string;
    VentaId: string;
    service: string;
    activeWork: boolean;
    finalized: boolean;

}
