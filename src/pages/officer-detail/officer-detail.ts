import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-officer-detail',
  templateUrl: 'officer-detail.html',
})
export class OfficerDetailPage {

  officer;
  officer_name;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      this.officer = this.navParams.get('officer');
      if(this.officer){
        this.officer_name = this.officer.name;
        // console.log(this.officer_name);
      }
  }

}

