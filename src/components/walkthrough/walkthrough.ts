import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, NavParams, Slides} from 'ionic-angular';


@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {
  @ViewChild(Nav) nav : Nav;
  @ViewChild(Slides) slides: Slides; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  changed(){
    let activeSlideIndex = this.slides.getActiveIndex();
      console.log(activeSlideIndex);
    }

    navigateHome(){
      this.nav.push('HomePage');
    }

}
