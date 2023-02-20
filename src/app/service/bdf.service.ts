import { Injectable } from '@angular/core';
import { UserRegisterI } from '../models/User.interface';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdfService {



  constructor(private firebd: AngularFirestore) {

  }
  createDpc(data: any, path: string, idDoc: string) {
    const collation = this.firebd.collection(path);
    return collation.doc(idDoc).set(data);
  }

  getId() {
    return this.firebd.createId();
  }

  getCollection() {
    console.log('estoy por leer una colecion');
    this.firebd.collection('Test').valueChanges().subscribe(res => {
      console.log(res);
    })
  }
  getDoc<tipo>(path: string, idDoc: string) {
    return this.firebd.collection(path).doc<tipo>(idDoc).valueChanges();
  }

  addUserdb(data: UserRegisterI, path: string) {


  }

}
