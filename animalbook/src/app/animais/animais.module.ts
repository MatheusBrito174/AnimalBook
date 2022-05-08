import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CartaoModule } from './../componentes/cartao/cartao.module';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimalComponent } from './animal/animal.component';
import { ComentariosComponent } from './detalhes-animal/comentarios/comentarios.component';
import { DetalhesAnimalComponent } from './detalhes-animal/detalhes-animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    GradeFotosAnimaisComponent,
    DetalhesAnimalComponent,
    ComentariosComponent,
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    ReactiveFormsModule,
    MensagemModule,
  ],
})
export class AnimaisModule {}
