import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, take, switchMap, tap } from 'rxjs';
import { ComentarioService } from './comentario.service';
import { Component, Input, OnInit } from '@angular/core';
import { Comentarios } from './comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() animalId!: number;

  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(
    private readonly _comentarioService: ComentarioService,
    private readonly _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comentarioForm = this._formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });

    this.atualizarComentarios();
  }

  private atualizarComentarios() {
    this.comentarios$ = this._comentarioService.buscar(this.animalId);
  }

  comentar() {
    this._comentarioService
      .criarComentario(
        this.animalId,
        this.comentarioForm.get('comentario')?.value
      )
      .pipe(
        take(1),
        tap(() => this.atualizarComentarios())
      )
      .subscribe();
  }
}
