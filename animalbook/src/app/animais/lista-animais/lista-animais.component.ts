import { Observable, switchMap, tap } from 'rxjs';
import { Animais } from './../animal';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais$!: Observable<Animais>;

  constructor(
    private readonly _animaisService: AnimaisService,
    private readonly _usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.animais$ = this._usuarioService
      .retornarUsuario()
      .pipe(
        switchMap((usuario) =>
          this._animaisService.buscarAnimaisDoUsuario(usuario.name ?? '')
        )
      );
  }
}
