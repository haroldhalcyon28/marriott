import { UpcomingComponent } from './../upcoming/upcoming';
import { Component } from '@angular/core';
import { CancelledComponent } from "../cancelled/cancelled";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsComponent {
  tab1Root = UpcomingComponent;
  tab2Root = CancelledComponent;
  constructor() {

  }

}
    