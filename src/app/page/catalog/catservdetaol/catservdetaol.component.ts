import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, FormControl } from '@angular/forms'
import { CatServicio } from 'src/app/models/CatService';
import { BdfService } from 'src/app/service/bdf.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catservdetaol',
  templateUrl: './catservdetaol.component.html',
  styleUrls: ['./catservdetaol.component.css']
})
export class CatservdetaolComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private firbd: BdfService,
    private _routeActice: ActivatedRoute,
    private _Route: Router) { }

  descripcionValue: string = ''
  precioValue: Number = 0;

  descripcion = new FormControl('', [Validators.required]);
  serviceform = this.fb.group({
    descripcion: [''],
    precio: ['']
  });

  serviceobj!: CatServicio;
  idNext: any = 0;
  idService: Number = 0;
  documentoId: string = '';

  ngOnInit(): void {
    this.idService = parseInt(this._routeActice.snapshot.paramMap.get('id')!);
    this.getServicesBD(this.idService);
    this.getDocumentId(this.idService);
  }

  async getDocumentId(idP: Number) {
    const result = await this.firbd.getColletionById2('service', idP)
      .forEach(doc => doc.docs.map(m => this.documentoId = m.id));

    console.log('asdsa', this.documentoId)

  }

  async getServicesBD(idP: Number) {
    const result = await this.firbd.getColletionById<CatServicio>('service', idP);
    if (result) {
      const otro = await result.subscribe(r => r.map(m => {
        this.descripcionValue = m.descripcion;
        this.precioValue = m.precio;
      }));
      // otro.unsubscribe();
    }
    // otro.unsubscribe();
  }

  async save() {

    if (this.serviceform.valid) {


      const maximo = await this.firbd.getMaxIdByCollection<CatServicio>('service');
      if (maximo) {
        const idre = await maximo.subscribe(r => r.map(m => {
          this.idNext = m.id;

          this.serviceobj = {
            descripcion: this.serviceform.get('descripcion')?.value!,
            precio: parseFloat(this.serviceform.get('precio')?.value!),
            id: this.idNext += 1
          }
          console.log(this.serviceobj);
          this.firbd.createDoc(this.serviceobj, 'service');

          idre.unsubscribe();
          this._Route.navigate(['listservice'])
        }));


      }

    }


  }

  async update() {
    if (this.serviceform.valid) {
      let objUpdate = {
        descripcion: this.serviceform.get('descripcion')?.value!,
        precio: parseFloat(this.serviceform.get('precio')?.value!),
      }
      const result = await this.firbd.updateCollation(objUpdate, 'service', this.documentoId);
      this._Route.navigate(['listservice'])

    }

  }



}
