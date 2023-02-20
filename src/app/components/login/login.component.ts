import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validator, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { UserRegisterI } from 'src/app/models/User.interface';
import { AuthService } from 'src/app/service/auth.service';
import { BdfService } from 'src/app/service/bdf.service';
// import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  objfomr: any;
  dato: UserRegisterI = {
    name: 'Gustavo Carreño Nevarez',
    email: 'gus3@gmail.com',
    password: '1234567',
    perfil: 'visitante'
  };


  loginform = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder,
    private _authervice: AuthService,
    private fireBD: BdfService,
    private _router: Router) { }
  // ngOnInit(): void {

  // }
  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'El usuario es requerido';
    }
    else return '';
  }

  getErrorMessagepsw() {
    if (this.password.hasError('required'))
      return 'password requerido';
    else return ''
  }


  hide = true;


  onLogin(): void {
    const formValue = this.loginform.value;
    if (!this.loginform.valid)
      console.log('Formulario invalido')
    else {
      this._authervice.login(formValue.username!, formValue.password!);


    }
    this.objfomr = formValue;
  }



  async onLoginGood() {
    const formValue = this.loginform.value;
    const res = await this._authervice.login2(formValue.username!, formValue.password!)
      .catch((er: any) => {
        console.log(er);
      })

    if (res) {
      console.log('Usuario logueado con exito');
      console.log(res.user.uid);
      this._router.navigate(['/']);

    }
  }

  async onRegisterUser() {
    const resulRegisterUser = await this._authervice.registrarUser(this.dato).catch(() => {
      console.log('mandar el error de creacion de usuario');
    });
    if (resulRegisterUser) {
      console.log('Existo al crear el usuario');
      const path = 'User';
      const Id = resulRegisterUser.user?.uid;
      this.dato.password = "";
      await this.fireBD.createDpc(this.dato, path, Id!);
      console.log('Todo Ok');
      this._router.navigate(['/']);
    }
  }
}
