import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  user :any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.user = this.navParams.get('user');
    // console.log(this.user);
  }

}
