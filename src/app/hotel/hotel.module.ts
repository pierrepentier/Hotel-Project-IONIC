import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelRoutingModule } from './hotel-routing.module';

import { HotelComponent } from './hotel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelRoutingModule
  ],
  declarations: [HotelComponent]
})
export class HotelModule {}
