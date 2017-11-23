
import { IonicPageModule } from 'ionic-angular';
import { HotelSearchComponent } from './hotel-search';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HotelSearchComponent
    ],
    imports: [
        IonicPageModule.forChild(HotelSearchComponent),
        FormsModule
    ],
    exports: [
        HotelSearchComponent
    ],
    providers: [  
        
    ]
})
export class HotelSearchComponentModule { }