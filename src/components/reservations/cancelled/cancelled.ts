import { Component } from '@angular/core';

/**
 * Generated class for the CancelledComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cancelled',
  templateUrl: 'cancelled.html'
})
export class CancelledComponent {

  text: string;

  constructor() {   
    this.text = 'Cancelled';
  }

}
