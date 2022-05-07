import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './../autenticacao/token.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Animais } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  private readonly _baseUrl: string = environment.apiBaseUrl;

  constructor(private readonly _http: HttpClient) {}

  buscarAnimaisDoUsuario(userName: string): Observable<Animais> {
    return this._http.get<Animais>(`${this._baseUrl}/${userName}/photos`);
  }
}
