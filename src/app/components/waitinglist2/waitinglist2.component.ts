import { Component, OnInit } from '@angular/core';
import { ListaEspera } from 'src/app/models/ListaEspera';
import { WaitlistService } from 'src/app/service/waitlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waitinglist2',
  templateUrl: './waitinglist2.component.html',
  styleUrls: ['./waitinglist2.component.css']
})
export class Waitinglist2Component implements OnInit {

  objListaEspera: ListaEspera[] = [];

  longText = `Gustavo Carreño Nevarez`;

  constructor(private _waitingSevice: WaitlistService,
    private _router: Router) { }

  ngOnInit(): void {
    this.objListaEspera = this._waitingSevice.getWaitingList();
  }

  listInfo(itemList: ListaEspera) {

    this._router.navigate(['services', itemList.uuid])
  }

  newSales() {
    this._router.navigate(['newsale'])
  }
}
