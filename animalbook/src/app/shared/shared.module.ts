import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, MensagemModule],
  exports: [ReactiveFormsModule, MensagemModule],
})
export class SharedModule {}
