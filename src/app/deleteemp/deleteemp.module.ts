import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteempPageRoutingModule } from './deleteemp-routing.module';

import { DeleteempPage } from './deleteemp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteempPageRoutingModule
  ],
  declarations: [DeleteempPage]
})
export class DeleteempPageModule {}
