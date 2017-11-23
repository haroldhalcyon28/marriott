import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-hotel-detail',
  templateUrl: 'hotel-detail.html',
})  
export class HotelDetailPage {

  hotel = {
    name: 'Renaissance Atlanta Midtown Hotel',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/images/img4.jpg',
    occupation: 'Designer',
    location: '866 W. Peachtree Street, NW Atlanta, Georgia 30308',
    description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.',
    address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
    phone: '555 555 555',
    site: 'www.renainsercs.com',
    whatsapp: '555 555 555',
  };

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileFivePage');
  }

}
