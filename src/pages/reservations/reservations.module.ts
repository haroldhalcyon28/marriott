import { reservationsModule } from './../../components/reservations/reservations.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationsPage } from './reservations';
import { SuperTabsModule } from "ionic2-super-tabs";

@NgModule({
  declarations: [
    ReservationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationsPage),
    SuperTabsModule,
    reservationsModule
  ],
})
export class ReservationsPageModule {}
