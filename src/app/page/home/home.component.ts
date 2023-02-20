import { Component, OnInit } from '@angular/core';

import { BdfService } from 'src/app/service/bdf.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fireBD: BdfService) {

  }
  ngOnInit(): void {
    this.getTEstColecction();
  }

  getTEstColecction() {
    console.log('asdasd')

    // this.fireBD.getCollection();
  }
}
