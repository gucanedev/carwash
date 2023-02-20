import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';
import { BdfService } from 'src/app/service/bdf.service';

import { UserRegisterI } from 'src/app/models/User.interface';

@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.css']
})
export class HeadermenuComponent {

  login: boolean = false;
  rol: 'visitante' | 'admin' = null!

  constructor(private _autService: AuthService,
    private _bdFire: BdfService,
    private _router: Router) {
    this._autService.stateUser().subscribe(res => {
      if (res) {
        this.login = true;
        this.getDatosUser(res.uid);
      } else {
        this.login = false;
        this._router.navigate(['/login']);
      }
    })
  }

  async cerrarSession() {
    return await this._autService.logout();
  }
  getDatosUser(uid: string) {
    const path = 'User';
    const id = uid;
    this._bdFire.getDoc<UserRegisterI>(path, id).subscribe(res => {
      // console.log(res);
      if (res) {
        console.log(res.perfil);
        this.rol = res.perfil;
      }
    });
  }

}
