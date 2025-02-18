import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HufflepuffPageRoutingModule } from './hufflepuff-routing.module';

import { HufflepuffPage } from './hufflepuff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HufflepuffPageRoutingModule
  ],
  declarations: [HufflepuffPage]
})
export class HufflepuffPageModule {}
