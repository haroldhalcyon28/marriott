import { SuperTabsModule } from 'ionic2-super-tabs';
import { TabsComponent } from './tabs/tabs';
import { CancelledComponent } from './cancelled/cancelled';
import { UpcomingComponent } from './upcoming/upcoming';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
           UpcomingComponent,
           CancelledComponent,
           TabsComponent
	],
	imports: [   
           IonicModule,
           SuperTabsModule
	],  
	exports: [
          UpcomingComponent,     
          CancelledComponent,
          TabsComponent
	],
	providers: [

	]
})  

export class reservationsModule { }
