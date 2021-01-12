import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'addemp',
    loadChildren: () => import('./addemp/addemp.module').then( m => m.AddempPageModule)
  },
  {
    path: 'viewemp',
    loadChildren: () => import('./viewemp/viewemp.module').then( m => m.ViewempPageModule)
  },
  {
    path: 'editemp',
    loadChildren: () => import('./editemp/editemp.module').then( m => m.EditempPageModule)
  },
  {
    path: 'deleteemp',
    loadChildren: () => import('./deleteemp/deleteemp.module').then( m => m.DeleteempPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
