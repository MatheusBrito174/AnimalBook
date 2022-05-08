import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap, take } from 'rxjs';
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
  animais!: Animais;

  constructor(private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(take(1))
      .subscribe(
        () => (this.animais = this._activatedRoute.snapshot.data['animais'])
      );
  }
}
