import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewempPageRoutingModule } from './viewemp-routing.module';

import { ViewempPage } from './viewemp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewempPageRoutingModule
  ],
  declarations: [ViewempPage]
})
export class ViewempPageModule {}
