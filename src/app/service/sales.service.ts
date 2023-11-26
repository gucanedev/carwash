import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatServicio, CatServicioP, ResponseGeneric } from '../models/CatService';
import { Venta } from '../models/Sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  rutaApi: String = 'https://localhost:7023/api'

  constructor(private readonly http: HttpClient) { }


  getAllService() {
    return this.http.get<CatServicioP>(`${this.rutaApi}/ReceptionCar`);

  }
  saveSale(entity: Venta) {
    return this.http.post<ResponseGeneric>(`${this.rutaApi}/ReceptionCar`, entity);
  }

}
