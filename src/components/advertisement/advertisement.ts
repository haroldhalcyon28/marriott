import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'advertisement',
  templateUrl: 'advertisement.html'
})
export class AdvertisementComponent {

  text: string;

  constructor(private navCtrl: NavController) {
 
  }

  hotelDetail(){
    this.navCtrl.push('HotelDetailPage');
  }

}
