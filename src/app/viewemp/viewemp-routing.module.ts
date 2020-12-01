import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewempPage } from './viewemp.page';

const routes: Routes = [
  {
    path: '',
    component: ViewempPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewempPageRoutingModule {}
