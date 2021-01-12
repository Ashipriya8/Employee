import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditempPageRoutingModule } from './editemp-routing.module';

import { EditempPage } from './editemp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditempPageRoutingModule
  ],
  declarations: [EditempPage]
})
export class EditempPageModule {}
