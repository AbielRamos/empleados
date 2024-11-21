import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProbedoresPageRoutingModule } from './probedores-routing.module';

import { ProbedoresPage } from './probedores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProbedoresPageRoutingModule
  ],
  declarations: [ProbedoresPage]
})
export class ProbedoresPageModule {}
