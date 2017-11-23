import { ModalController } from 'ionic-angular';
import { Component } from '@angular/core';
import { CalendarModalOptions, CalendarModal } from "ion2-calendar";

@Component({
  selector: 'hotel-search',
  templateUrl: 'hotel-search.html'
})
export class HotelSearchComponent {

  pickedDate: any;

  constructor(private modalCtrl: ModalController) {

  }

  openCalendar(){  
    const options: CalendarModalOptions = {   
      pickMode: 'range',  
      title: 'Check-in day(s)',
      color: 'danger'
    }

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();  
    myCalendar.onDidDismiss(date => {
      console.log(date);
      let dateFrom = date.from.date;
      let monthFrom = date.from.months;
      let yearFrom = date.from.years;

      let dateTo= date.to.date;
      let monthTo = date.to.months;
      let yearTo= date.to.years;

      this.pickedDate = dateFrom+'/'+monthFrom+'/'+yearFrom+ ' - ' +dateTo+'/'+monthTo+'/'+yearTo;
    });

  }


}
