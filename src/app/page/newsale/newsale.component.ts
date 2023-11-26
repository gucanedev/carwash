import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, FormControl } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogsaleComponent } from 'src/app/components/dialog/dialogsale/dialogsale.component';
import { CatServicio, CatServicioH, CatServicioP, IServicioSelect, ResponseGeneric } from 'src/app/models/CatService';
import { Venta, itemSales } from 'src/app/models/Sales';
import { BdfService } from 'src/app/service/bdf.service';
import { SalesService } from 'src/app/service/sales.service';

interface IIdsServices2 {
  id: number;
}


@Component({
  selector: 'app-newsale',
  templateUrl: './newsale.component.html',
  styleUrls: ['./newsale.component.css']
})
export class NewsaleComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private _bdservice: BdfService,
    private _bdServiceNET: SalesService,
    private _router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  client = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  service = new FormControl('', [Validators.required]);
  package = new FormControl('');
  telephone = new FormControl('');
  displayedColumns: string[] = ['item', 'cost'];
  animal: string = '';
  name: number = 0;



  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  // objservi: CatServicioH = { servicioId: 1, descripcion: "" };
  toppingList: CatServicioH[] = [{ servicioId: 1, descripcion: "Inicial", precio: 0 }];
  // toppingList2: CatServicioH = { servicioId: 1, descripcion: "Inicial" };
  toppingListfb: IServicioSelect[] = [{ id: 1, descripcion: "asdasd" }];

  itemVenta: itemSales[] = [];


  salesForm = this.fb.group({
    client: [''],
    description: [''],
    service: [],
    package: [],
    telephone: []

  });
  selected: number[] = [];
  selectedCar = this.toppingList[0].servicioId;

  ngOnInit(): void {
    this.getServicesBD();
  }

  getErrorMessage() {
    if (this.client.hasError('required')) {
      return 'Campo obligatorio';
    } else
      return '';
  }

  geteErrorDescripcion() {
    if (this.description.hasError('required')) {
      return 'Campo obligatorio';
    } else
      return '';
  }
  geteErrorService() {

    if (this.selected.length <= 0) {
      return 'Campo obligatorio';

    } else
      return '';
  }

  //muestra el toast
  openSnackBar(message: string) {
    this._snackBar.open(message, "Cerrar", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
    });
  }



  openDialog() {
    if (this.salesForm.valid) {

      let total: number = this.getTotalCost();
      if (total <= 0) {
        this.openSnackBar("Agregar servicios a la lista");
        return;
      }
      //Guardamos la venta
      this.saveSale();

      const dialogRef = this.dialog.open(DialogsaleComponent, {
        data: { name: total, animal: this.animal },
      });

      dialogRef.afterClosed().subscribe(result => {
        this._router.navigate(['/lobby']);
        console.log('The dialog was closed');
        this.animal = result;
      });
    }
  }


  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.itemVenta.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  getServicesBDRB() {
    const result = this._bdservice.getCollectionValueChange<CatServicio>('service').subscribe(res => {

      this.toppingListfb = res;
      // console.log(res);
      console.log(res);
      result.unsubscribe();

    });
  }
  getServicesBD() {

    let CatServicioHija: CatServicioH[];
    const loginreturn = this._bdServiceNET.getAllService()
      .subscribe({
        next: (response: CatServicioP) => {
          if (response.isSuccess) {
            this.toppingList = response.result;
            // this.isLoad = false;

          }
          else {
            console.log('Error');

            // this.isLoad = false;
          }

        },
        error: (er: any) => {
          // this.isLoad = false;
          // this.messageError = "Ocurrio un error al intentar Iniciar Sesión";
          console.error('Ocurrio un error en bd!');
        }
      });



  }

  vewSalesDetail() {

    if (this.salesForm.valid) {
      let entity = new Venta();

      this.selected.forEach((elemen) => {
        let filter = this.toppingList.find(elem => elem.servicioId == elemen);
        let itemS: itemSales = { item: filter?.descripcion ?? '', cost: filter?.precio ?? 0 };
        entity.pushItemSale2(itemS);
      });

      this.itemVenta = entity.servicioList;

    }

  }

  onchangeh(event: Event) {
    console.log((event.target as HTMLSelectElement).value)
  }

  saveSale() {
    if (this.salesForm.valid) {


      if (this.itemVenta.length <= 0) {
        this.openSnackBar("Agregar servicios a la lista");
        return;
      }
      // console.log(this.salesForm.get('package')?.value!)
      let entity = new Venta();


      entity.SetValues(0, this.salesForm.get('client')?.value!, this.salesForm.get('description')?.value!, this.salesForm.get('telephone')?.value!, false, 0, this.selected);
      // console.log(entity);
      const save = this._bdServiceNET.saveSale(entity).subscribe({
        next: (response: ResponseGeneric) => {
          if (response.isSuccess) {
            this._router.navigate(['/lobby']);
            console.log('Se guardo correctamente')

          }
          else {
            this.openSnackBar("Error al guardar la venta" + response.error);
            // console.log('Error al guardar la venta' + response.error);
          }

        },
        error: (er: any) => {
          this.openSnackBar("Error al guardar la venta");
          // console.log('Error noc controlado al guardar la venta');
        }
      });
    }

  }

  saveSaleFireBase(obj: any) {
    console.log(obj);
    if (this.salesForm.valid) {
      // console.log(this.salesForm.value);
      console.log(this.salesForm.get('client')?.value!)
      console.log(this.salesForm.get('description')?.value!)
      console.log(this.salesForm.get('telephone')?.value!)
      console.log(obj)
      console.log(this.salesForm.get('package')?.value!)

    }
    // this._router.navigate(['lobby']);
  }

}
