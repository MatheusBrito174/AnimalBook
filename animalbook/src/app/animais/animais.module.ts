import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';

@NgModule({
  declarations: [ListaAnimaisComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ],
})
export class AnimaisModule {}
