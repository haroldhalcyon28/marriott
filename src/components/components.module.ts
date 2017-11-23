import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { AdvertisementComponent } from './advertisement/advertisement';

@NgModule({
	declarations: [
		AdvertisementComponent
	],
	imports: [   
		IonicModule
	],  
	exports: [
		AdvertisementComponent
	],
	providers: [

	]
})  

export class ComponentsModule { }
