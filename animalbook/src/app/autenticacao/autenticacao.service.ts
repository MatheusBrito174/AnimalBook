import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private readonly _baseUrl = environment.apiBaseUrl;

  constructor(private _httpClient: HttpClient) { }

  autenticar(username: string, password: string): Observable<any> {
    const payload = {
      userName: username,
      password: password
    };

    return this._httpClient.post(`${this._baseUrl}/user/login`, payload);
  }
}
