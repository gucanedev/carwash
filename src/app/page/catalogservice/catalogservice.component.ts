import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CatServicio } from 'src/app/models/CatService';
import { BdfService } from 'src/app/service/bdf.service';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

const serviciosObjeto: CatServicio[] = []

@Component({
  selector: 'app-catalogservice',
  templateUrl: './catalogservice.component.html',
  styleUrls: ['./catalogservice.component.css']
})
export class CatalogserviceComponent implements AfterViewInit {

  serviceN: CatServicio[] = []

  displayedColumns: string[] = ['id', 'descripcion'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  objeto: any;

  constructor(private _router: Router,
    private _bdservice: BdfService) {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource();
    // Assign the data to the data source for the table to render



  }
  getServicesBD() {
    this._bdservice.getCollectionValueChange<CatServicio>('service').subscribe(res => {

      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  ngAfterViewInit() {
    this.getServicesBD();

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  newService() {
    this._router.navigate(['newservice/0']);
  }

  selectedRow(row: any) {
    this._router.navigate([`newservice/${row.id}`]);

  }

}

