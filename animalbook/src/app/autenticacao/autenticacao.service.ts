import { UsuarioService } from './usuario/usuario.service';
import { environment } from './../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from './usuario/usuario';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private readonly _baseUrl = environment.apiBaseUrl;

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _usuarioService: UsuarioService
  ) {}

  autenticar(
    username: string,
    password: string
  ): Observable<HttpResponse<Usuario>> {
    const payload = {
      userName: username,
      password: password,
    };

    return this._httpClient
      .post<Usuario>(`${this._baseUrl}/user/login`, payload, {
        observe: 'response',
      })
      .pipe(
        tap((response) =>
          this._usuarioService.salvarToken(
            response.headers.get('x-access-token') ?? ''
          )
        )
      );
  }
}
