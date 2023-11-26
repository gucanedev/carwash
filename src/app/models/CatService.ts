
export interface CatServicio {
    id: Number;
    descripcion: string;
    precio: Number;
}

export interface CatServicioP {
    isSuccess: boolean;
    result: CatServicioH[];

}

export interface CatServicioH {
    servicioId: Number;
    descripcion: string;
    precio: number;

}

export interface IServicioSelect {
    id: Number;
    descripcion: string;
}

export interface ResponseGeneric {
    isSuccess: boolean;
    error: string;
    result: any;

}