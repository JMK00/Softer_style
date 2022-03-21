import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StylePageRoutingModule } from './style-routing.module';

import { StylePage } from './style.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StylePageRoutingModule
  ],
  declarations: [StylePage]
})
export class StylePageModule {}
