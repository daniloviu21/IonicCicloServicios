import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GryffindorPageRoutingModule } from './gryffindor-routing.module';

import { GryffindorPage } from './gryffindor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GryffindorPageRoutingModule
  ],
  declarations: [GryffindorPage]
})
export class GryffindorPageModule {}
