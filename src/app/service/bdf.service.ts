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
  createDoc(data: any, path: string) {
    const collation = this.firebd.collection(path);
    console.log('objeto mandado a crear');
    console.log(data);
    return collation.doc().set(data);
  }
  updateDoc(data: any, path: string, id: string) {
    const collation = this.firebd.collection(path);
    console.log('objeto mandado a modificar');
    console.log(data);
    return collation.doc().update(data);
  }

  getId() {
    return this.firebd.createId();
  }

  getCollection(nameCollection: string) {
    console.log('estoy por leer una colecion');
    return this.firebd.collection(nameCollection);
  }
  getCollectionValueChange<tipo>(nameCollection: string) {
    console.log('estoy por leer una colecion');
    return this.firebd.collection<tipo>(nameCollection).valueChanges();
  }

  getMaxIdByCollection<tipo>(nameCollection: string) {
    console.log('estoy por leer una colecion');
    return this.firebd.collection<tipo>(nameCollection, ref => ref.orderBy('id', 'desc').limit(1)).valueChanges();
  }
  getColletionById<tipo>(nameColletion: string, id: Number) {
    return this.firebd.collection<tipo>(nameColletion, ref => ref.where('id', '==', id)).valueChanges();
    // return this.firebd.collection(nameColletion).doc(id)
  }
  getColletionById2(nameColletion: string, id: Number) {
    return this.firebd.collection(nameColletion, ref => ref.where('id', '==', id)).get();
    // return this.firebd.collection(nameColletion).doc(id)
  }

  updateCollation<tipo>(data: any, nameColletion: string, idDoc: string) {
    console.log(data);
    return this.firebd.collection<tipo>(nameColletion).doc(idDoc).update(data);
    // return this.firebd.collection(nameColletion).doc(id)
  }

  getDoc<tipo>(path: string, idDoc: string) {
    return this.firebd.collection(path).doc<tipo>(idDoc).valueChanges();
  }

  addUserdb(data: UserRegisterI, path: string) {


  }

}
