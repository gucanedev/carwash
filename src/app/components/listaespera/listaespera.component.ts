import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaespera',
  templateUrl: './listaespera.component.html',
  styleUrls: ['./listaespera.component.css']
})
export class ListaesperaComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  newSales() {
    this._router.navigate(['newsale'])
  }
}
