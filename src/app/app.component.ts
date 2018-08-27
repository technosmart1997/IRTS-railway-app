import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
// import { DropdownProvider } from '../providers/dropdown/dropdown';
import { SearchPage } from '../pages/search/search';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  options = 0;
  url1 :string = '';
  url2 : string = '';
  url3 :string = '';
  
  rootPage: any = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation 
    this.splashScreen.show();
  }
  getCurrentData(value){
    if(value != '' ){
      this.nav.push(SearchPage, {
        value : value
      });
    }else{

    }
    

  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  gotoUrl(url){
    // console.log(url);
    window.open(url,'_self');
  }

   
}
