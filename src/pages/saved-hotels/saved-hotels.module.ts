import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedHotelsPage } from './saved-hotels';

@NgModule({
  declarations: [
    SavedHotelsPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedHotelsPage),
  ],
})
export class SavedHotelsPageModule {}
