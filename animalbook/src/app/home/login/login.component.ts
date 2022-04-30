import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private readonly _autenticacaoService: AutenticacaoService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this._autenticacaoService
      .autenticar(this.username, this.password)
      .subscribe({
        next: () => this._router.navigateByUrl('animais'),
        error: () => alert('Erro ao autenticar.'),
      });
  }
}
