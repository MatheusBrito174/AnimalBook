import { HttpEventType, HttpUploadProgressEvent } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';

import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css'],
})
export class NovoAnimalComponent implements OnInit, OnDestroy {
  private readonly _subscription: Subscription = new Subscription();
  preview: string = '';
  arquivo!: File;
  novoAnimalForm!: FormGroup;
  percentualUpload: number = 0;

  constructor(
    private readonly _animaisService: AnimaisService,
    private readonly _formbuilder: FormBuilder,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.novoAnimalForm = this._formbuilder.group({
      arquivo: ['', Validators.required],
      descricao: ['', Validators.maxLength(300)],
      permiteComentarios: [true],
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  carregarImagem(event: Event) {
    const arquivo = (event.target as HTMLInputElement)?.files?.[0];
    if (!arquivo) {
      return;
    }

    this.arquivo = arquivo;

    const reader = new FileReader();

    reader.onload = (event) =>
      (this.preview = (event.target?.result as string) ?? '');

    reader.readAsDataURL(this.arquivo);
  }

  criarAnimal() {
    this.percentualUpload = 0;

    this._subscription.add(
      this._animaisService
        .upload(
          this.arquivo,
          this.novoAnimalForm.get('descricao')?.value,
          this.novoAnimalForm.get('permiteComentarios')?.value
        )
        .pipe(finalize(() => this._router.navigateByUrl('')))
        .subscribe((event) => {
          if (event.type !== HttpEventType.UploadProgress) {
            return;
          }

          event = event as HttpUploadProgressEvent;

          if (event.total === undefined) {
            return;
          }

          this.percentualUpload = Math.round(
            100 * (event.loaded / event.total)
          );
        })
    );
  }
}
