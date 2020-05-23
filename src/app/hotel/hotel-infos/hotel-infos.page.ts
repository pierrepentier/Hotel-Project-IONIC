import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel.model';
import { Categorie } from '../../categorie.model';
import { HotelService } from '../../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel-infos',
  templateUrl: './hotel-infos.page.html',
  styleUrls: ['./hotel-infos.page.scss'],
})
export class HotelInfosPage implements OnInit {
  private id:number;
  selectedHotel: Hotel;
  listeCategories: Observable <Categorie[]>;

  constructor(
    private service:HotelService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private alertControl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      console.log(param);
      this.id = +param.get("id");
    });
    this.service.getHotelById(this.id).subscribe(resultat => this.selectedHotel = resultat);
    this.listeCategories = this.service.getCategoriesByHotel(this.id);
  } 

}
