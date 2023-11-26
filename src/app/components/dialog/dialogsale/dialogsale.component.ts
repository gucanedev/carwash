import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



export interface DialogData {
  animal: string;
  name: number;
}

@Component({
  selector: 'app-dialogsale',
  templateUrl: './dialogsale.component.html',
  styleUrls: ['./dialogsale.component.css']
  // imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule]
})
export class DialogsaleComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogsaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  cambio: number = 0;

  calcularCambio(pagoCliente: number) {
    this.cambio = pagoCliente - this.data.name;
    console.log(this.cambio);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  modelChangeFn(value: number) {
    this.cambio = value - this.data.name;
  }
}
