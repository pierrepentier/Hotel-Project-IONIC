import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelInfosPageRoutingModule } from './hotel-infos-routing.module';

import { HotelInfosPage } from './hotel-infos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelInfosPageRoutingModule
  ],
  declarations: [HotelInfosPage]
})
export class HotelInfosPageModule {}
