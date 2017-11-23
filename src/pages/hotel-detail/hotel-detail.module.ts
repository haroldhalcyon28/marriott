import { ParallaxHeaderDirectiveModule } from './../../components/parallax-header/parallax-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelDetailPage } from './hotel-detail';
import { ElasticHeaderModule } from "ionic2-elastic-header/dist";
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    HotelDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelDetailPage),
    ElasticHeaderModule,
    ParallaxHeaderDirectiveModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWrwjtLtLBHs7dvRNC6Zy4GaU2fz1NtIs'
    })
  ],
})
export class HotelDetailPageModule {}
