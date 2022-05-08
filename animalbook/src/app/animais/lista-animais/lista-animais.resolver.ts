import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, take, switchMap } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AnimaisService } from '../animais.service';

import { Animais } from './../animal';

@Injectable({
  providedIn: 'root',
})
export class ListaAnimaisResolver implements Resolve<Animais> {
  constructor(
    private readonly _animaisService: AnimaisService,
    private readonly _usuarioService: UsuarioService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animais> {
    return this._usuarioService.retornarUsuario().pipe(
      take(1),
      switchMap((usuario) =>
        this._animaisService.buscarAnimaisDoUsuario(usuario.name ?? '')
      )
    );
  }
}
