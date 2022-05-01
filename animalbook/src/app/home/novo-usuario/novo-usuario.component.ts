import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _novoUsuarioService: NovoUsuarioService
  ) {}

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    });
  }

  cadastrar() {
    const novoUsuario: NovoUsuario = this.formGroup.getRawValue() as NovoUsuario;

    this._novoUsuarioService.cadastrar(novoUsuario).subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
    });
  }
}
