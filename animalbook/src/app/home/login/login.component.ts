import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';

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
      .pipe(take(1))
      .subscribe({
        next: () => this._router.navigateByUrl('animais'),
        error: () => alert('Erro ao autenticar.'),
      });
  }
}
