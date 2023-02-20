import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { UserRegisterI } from '../models/User.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  objLoginResponse: any;
  constructor(private _afAuth: AngularFireAuth,
    private _route: Router,
    private _snackBar: MatSnackBar) {

  }

  login(username: string, password: string): any {
    return this._afAuth.signInWithEmailAndPassword(username, password)
      .then(result => {
        this._afAuth.authState.subscribe(user => {
          if (user) {
            this._route.navigate(['/']);
          } else {
            this._snackBar.open("Ocurrio un erro al intentar iniciar sesion")
            console.log('asdasd')
          }

        })
      }).catch(() => {
        this._snackBar.open("Ocurrio un erro al intentar iniciar sesion", "Ok", { duration: 2000 })
      })
  }
  login2(username: string, password: string): any {
    return this._afAuth.signInWithEmailAndPassword(username, password);
  }

  logout() {
    console.log('cerrando session');
    return this._afAuth.signOut();
  }

  registrarUser(datos: UserRegisterI) {
    return this._afAuth.createUserWithEmailAndPassword(datos.email, datos.password);
  }

  stateUser() {
    return this._afAuth.authState;
  }



}
