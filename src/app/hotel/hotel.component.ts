import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel.model';
import { HotelService } from '../hotel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  listeHotels: Observable <Hotel[]>;

  constructor(private service: HotelService) {}

  ngOnInit() {
    this.listeHotels = this.service.getAllHotels();
  }

  sayHello(value){
    alert(value);
  }

  ngDoCheck(){
    /*this.listeHotels = this.service.getAllHotels();*/
  }

}
