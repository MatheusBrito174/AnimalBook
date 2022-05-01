import { NovoUsuario } from './novo-usuario';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  baseUrl: string = environment.apiBaseUrl;

  constructor(private readonly _http: HttpClient) { }

  cadastrar(user: NovoUsuario): Observable<any> {
    return this._http.post(`${this.baseUrl}/user/signup`, user);
  }
}
