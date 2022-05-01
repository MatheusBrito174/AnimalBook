import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameExisteService {
  constructor(private readonly _novoUsuarioService: NovoUsuarioService) {}

  userNameNaoExiste() {
    return (userName: AbstractControl) => {
      return userName.valueChanges.pipe(
        switchMap((userName) =>
          this._novoUsuarioService.userNameExiste(userName)
        ),
        map((userNameExiste: boolean) =>
          userNameExiste ? { userNameNaoExiste: true } : null
        ),
        first()
      );
    };
  }
}
