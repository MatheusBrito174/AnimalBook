import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private _usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private readonly _tokenService: TokenService) {
    if(this._tokenService.possuiToken()) {
      this.decodificarJWT();
    }
  }

  retornarUsuario(): Observable<Usuario> {
    return this._usuarioSubject.asObservable();
  }

  salvarToken(token: string) {
    this._tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout(): void {
    this._tokenService.excluirToken();
    this.decodificarJWT();
  }

  private decodificarJWT(): void {
    const token = this._tokenService.buscarToken();
    let usuario = {};

    if (token) {
      usuario = jwt_decode(token) as Usuario;
    }

    this._usuarioSubject.next(usuario);
  }
}
