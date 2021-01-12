import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteempPage } from './deleteemp.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteempPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteempPageRoutingModule {}
