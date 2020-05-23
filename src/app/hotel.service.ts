import { Injectable } from '@angular/core';
import { Hotel } from './hotel/hotel.model';
import { Categorie } from './categorie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const ALL_HOTELS_URI = "http://localhost:8000/hotels";
const SINGLE_HOTEL_URI ="http://localhost:8000/hotels/";


@Injectable({
  providedIn: 'root'
})

export class HotelService {
  
  private listeHotels: Hotel[] = [
    
  ]
  constructor(private httpClient : HttpClient) {
     
   }

  getAllHotels(){
    return this.httpClient.get<Hotel[]>(ALL_HOTELS_URI);
  }

  getHotelById(hotelId: number) {
    console.log(hotelId);
    return this.httpClient.get<Hotel>(SINGLE_HOTEL_URI + hotelId);
  }

  getCategoriesByHotel(hotelId: number) {
    console.log(hotelId);
    return this.httpClient.get<Categorie[]>(SINGLE_HOTEL_URI + hotelId + '/categories');
  }

  removeHotelById(id:number){
    this.listeHotels = this.listeHotels.filter(hotel => {
      return id !== hotel.id;
    })
    console.log(this.listeHotels);
  }


}
