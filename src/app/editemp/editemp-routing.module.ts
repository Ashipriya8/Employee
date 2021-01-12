import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditempPage } from './editemp.page';

const routes: Routes = [
  {
    path: '',
    component: EditempPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditempPageRoutingModule {}
