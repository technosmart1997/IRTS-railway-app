import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { HttpModule } from '@angular/http';


// import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SearchPage } from '../pages/search/search';
import { SignupPage } from '../pages/signup/signup';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { OfficerDetailPage } from '../pages/officer-detail/officer-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DropdownProvider } from '../providers/dropdown/dropdown';
import { GetDataProvider } from '../providers/get-data/get-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    SignupPage,
    DashboardPage,
    OfficerDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    SignupPage,
    DashboardPage,
    OfficerDetailPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DropdownProvider,
    GetDataProvider
  ]
})
export class AppModule {}
