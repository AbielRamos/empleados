import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProbedoresPage } from './probedores.page';

const routes: Routes = [
  {
    path: '',
    component: ProbedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProbedoresPageRoutingModule {}
