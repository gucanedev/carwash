import { Injectable } from '@angular/core';
import { ListaEspera } from '../models/ListaEspera';

@Injectable({
  providedIn: 'root'
})
export class WaitlistService {

  objListaEspera: ListaEspera[] = [
    { uuid: "1", name: "Gustavo Carreño Nevarez", service: "Aspirado", car: 'Honda Civic 2008', registerHour: new Date(), Timer: "01", finalized: true },
    { uuid: "1", name: "Gustavo Carreño Nevarez 2", service: "Lavado", car: 'Honda Civic 2008', registerHour: new Date(), Timer: "01", finalized: false },
    { uuid: "2", name: "Cristopher Carreño Nevarez", service: "Aspirado", car: 'Honda Civic 2008', registerHour: new Date(), Timer: "01", finalized: false },
    { uuid: "3", name: "Nocole Carreño Nevarez", service: "Aspirado y Lavado de motor", car: 'Honda Civic 2008', registerHour: new Date(), Timer: "01", finalized: false },
    { uuid: "4", name: "Cristopher Carreño Nevarez", service: "Aspirado", car: 'Honda Civic 2008', registerHour: new Date(), Timer: "01", finalized: false },
    { uuid: "5", name: "Cristopher Carreño Nevarez", service: "Aspirado", car: 'Honda Civic 2008', registerHour: new Date(), Timer: "01", finalized: false },
    { uuid: "6", name: "Cristopher Carreño Nevarez", service: "Aspirado", car: 'Honda Civic 2008', registerHour: new Date(), Timer: "01", finalized: false },
    { uuid: "7", name: "Cristopher Carreño Nevarez", service: "Aspirado", car: 'Honda Civic 2008', registerHour: new Date(), Timer: "01", finalized: true }
  ];



  constructor() { }

  getWaitingList() {
    return this.objListaEspera;
  }
  getInfoByDi(id: string) {

    var listar = this.getWaitingList().filter(f => f.uuid == id)
    return listar;
  }
  getInfoTerminated(id: string) {
    return this.objListaEspera.filter(r => r.uuid === id && r.finalized == true);
  }
}
