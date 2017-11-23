import { HotelSearchComponentModule } from './../../components/hotel-search/hotel-search.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'; // This is added when you want to use lazy loading
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    HotelSearchComponentModule,
    ComponentsModule
  ],
})
export class HomePageModule {}
