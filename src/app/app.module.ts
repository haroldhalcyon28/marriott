import { SuperTabsModule } from 'ionic2-super-tabs';
import { CalendarModule } from 'ion2-calendar';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ElasticHeaderModule } from "ionic2-elastic-header/dist";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [    
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    SuperTabsModule,
    ElasticHeaderModule
  ],
  bootstrap: [IonicApp],  
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
