import { TabsComponent } from './../../components/reservations/tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from "ionic2-super-tabs";


@IonicPage()
@Component({
  selector: 'page-reservations',
  templateUrl: 'reservations.html'
})
export class ReservationsPage {
  rootPage: any = TabsComponent;
  constructor(public navCtrl: NavController, public navParams: NavParams, public superTabsCtrl: SuperTabsController) {

  }



}
