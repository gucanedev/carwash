import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse, userLogin } from '../models/User.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarionetService {
  rutaApi: String = 'https://localhost:7023/api/cuentas'

  constructor(private readonly http: HttpClient) { }

  login(user: userLogin): any {

    return this.http.post<UserResponse>(`${this.rutaApi}/login`, user);
  }
}
