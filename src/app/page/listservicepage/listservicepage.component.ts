import { Component, OnInit } from '@angular/core';
import { WaitlistService } from 'src/app/service/waitlist.service';
import { ActivatedRoute, Router } from '@angular/router';

import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ListaEspera } from 'src/app/models/ListaEspera';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

@Component({
  selector: 'app-listservicepage',
  templateUrl: './listservicepage.component.html',
  styleUrls: ['./listservicepage.component.css']
})
export class ListservicepageComponent implements OnInit {

  objson: any = [];
  uuIdServicio: string = "";
  name: string = "";
  servicesFinalized: any;

  displayedColumns: string[] = ['select', 'uuid', 'service'];

  dataSource: any;
  selection: any;

  constructor(private _waitingSevice: WaitlistService,
    private _routeActice: ActivatedRoute,
    private _router: Router) { }



  ngOnInit(): void {
    this.uuIdServicio = this._routeActice.snapshot.paramMap.get('id')!;
    this.getInfoElement();

    this.dataSource = new MatTableDataSource<ListaEspera>(this.objson);
    this.selection = new SelectionModel<ListaEspera>(true, this.servicesFinalized);

  }
  getInfoElement() {
    this.objson = this._waitingSevice.getInfoByDi(this.uuIdServicio)
    this.servicesFinalized = this._waitingSevice.getInfoTerminated(this.uuIdServicio);

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;

    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {

    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);

  }
  onChange(row: any) {
    // console.log(row);
    this.selection.toggle(row);


  }

  isChecked(row: any) {

    // return row.finalized;
    return this.selection.isSelected(row);
  }

  saveStep() {
    let selectedFileIds: string[];
    for (let item of this.selection.selected) {
      console.log(item.service);

    }
    this._router.navigate(['lobby']);

  }

}
