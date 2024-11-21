import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'probedores', loadChildren: () => import('./probedores/probedores.module').then(m => m.ProbedoresPageModule) },
  {
    path: 'notification',
    loadChildren: () => import('./services/notification.service').then( m => m.NotificationService)
  },
  // otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

