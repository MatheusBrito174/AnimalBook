import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/autenticacao/usuario/usuario';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  $usuario: Observable<Usuario>;

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) {
    this.$usuario = this._usuarioService.retornarUsuario();
  }

  ngOnInit(): void {}

  logout(): void {
    this._usuarioService.logout();
    this._router.navigateByUrl('/');
  }
}
