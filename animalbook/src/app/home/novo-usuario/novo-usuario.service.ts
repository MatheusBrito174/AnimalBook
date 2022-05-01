import { NovoUsuario } from './novo-usuario';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  private readonly _baseUrl: string = environment.apiBaseUrl;

  constructor(private readonly _http: HttpClient) { }

  cadastrar(user: NovoUsuario): Observable<any> {
    return this._http.post(`${this._baseUrl}/user/signup`, user);
  }

  userNameExiste(userName: string): Observable<any> {
    return this._http.get(`${this._baseUrl}/user/exists/${userName}`);
  }
}
