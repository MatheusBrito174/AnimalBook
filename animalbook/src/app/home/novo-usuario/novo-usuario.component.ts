import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsernameExisteService } from './username-existe.service';
import { userNamePasswordDiferentes } from './username-password-diferentes.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _novoUsuarioService: NovoUsuarioService,
    private readonly _usernameExisteService: UsernameExisteService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this._formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [Validators.required, minusculoValidator],
          [this._usernameExisteService.userNameNaoExiste()],
        ],
        password: ['', [Validators.required]],
      },
      {
        validators: [userNamePasswordDiferentes],
      }
    );
  }

  cadastrar() {
    const novoUsuario: NovoUsuario =
      this.novoUsuarioForm.getRawValue() as NovoUsuario;

    this._novoUsuarioService.cadastrar(novoUsuario).subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
    });
  }
}
