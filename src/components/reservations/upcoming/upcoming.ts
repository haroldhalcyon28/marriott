import { Component } from '@angular/core';

/**
 * Generated class for the UpcomingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'upcoming',
  templateUrl: 'upcoming.html'
})
export class UpcomingComponent {

  text: string;

  constructor() {
    this.text = 'Upcoming';
  }

}
