import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hotel',
    children : [
    {
    path :'',
    loadChildren: () => import('./hotel/hotel.module').then( m => m.HotelModule)
    },

    {
    path: ':id',
    loadChildren: './hotel/hotel-infos/hotel-infos.module#HotelInfosPageModule'
    }  
    ]
  },
  {
    path :'hotel-infos',
    loadChildren: () => import('./hotel/hotel-infos/hotel-infos.module').then( m => m.HotelInfosPageModule)
    },
  {
    path: '',
    redirectTo: 'hotel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
