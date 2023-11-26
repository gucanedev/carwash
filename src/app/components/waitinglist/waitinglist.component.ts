import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs'

export interface WaitListCustomer {
  name: string;
  service: string;
  // registerHour:Date;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079 },
  { position: 2, name: 'Helium', weight: 4.0026 },
  { position: 3, name: 'Lithium', weight: 6.941 },
  { position: 4, name: 'Beryllium', weight: 9.0122 },
  { position: 5, name: 'Boron', weight: 10.811 },
  { position: 6, name: 'Carbon', weight: 12.0107 },
  { position: 7, name: 'Nitrogen', weight: 14.0067 },
  { position: 8, name: 'Oxygen', weight: 15.9994 },
  { position: 9, name: 'Fluorine', weight: 18.9984 },
  { position: 10, name: 'Neon', weight: 20.1797 },
];


const CUSTOMER_DATA: WaitListCustomer[] = [
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' },
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' },
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' },
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' },
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' },
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' },
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' },
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' },
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' },
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' },
  { name: 'Gustavo Carreño Nevarez', service: 'Labado y aspirado' }
];

@Component({
  selector: 'app-waitinglist',
  templateUrl: './waitinglist.component.html',
  styleUrls: ['./waitinglist.component.css']
})
export class WaitinglistComponent implements OnInit {

  displayedColumns: string[] = ['name', 'service', 'getdetails'];
  dataSource = CUSTOMER_DATA;

  show: boolean = false;
  tiempoTRanscurrido: string = "0";

  constructor() {

  }

  ngOnInit(): void {


    this.getEstimatedTimer();
  }

  getRecord(name: string) {
    console.log(name);
  }
  getEstimatedTimer() {
    const observableIntervalo = interval(1000); // cada minuto
    let horaR = new Date("2023-02-27 21:05");
    let horacurren = new Date("2023-02-27 22:03");
    let lapso = horacurren.getTime() - horaR.getTime();
    let segundos = lapso / 1000;
    let minutos = ((lapso / 1000) / 60) % 60
    let horas = Math.floor(((lapso / 1000) / 60) / 60)

    let sec = 0;

    this.tiempoTRanscurrido = horas + ":" + minutos;

    observableIntervalo.subscribe(res => {

      if (res == 60) {
        minutos++;
      }
      // minutos = minutos + res;
      // if (minutos + res == 60) {
      //   horas++;
      //   minutos = 0;
      // }
      // this.tiempoTRanscurrido = horas + ":" + minutos;
      this.tiempoTRanscurrido = horas + ":" + minutos + ' ' + res;
      // this.tiempoTRanscurrido = res.toString();
      console.log('tiempo transcurrido en horas', this.tiempoTRanscurrido);

    });
    // console.log('tiempo transcurrido en milesegundos', lapso);
    // console.log('tiempo transcurrido en segundos', segundos);
    // console.log('tiempo transcurrido en minutos', minutos);

    // console.log(new Date("2023-02-27 21:05"));
  }

  getTimerTranscurrido(date: string) {

  }

}
