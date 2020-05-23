import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelInfosPage } from './hotel-infos.page';

const routes: Routes = [
  {
    path: '',
    component: HotelInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelInfosPageRoutingModule {}
