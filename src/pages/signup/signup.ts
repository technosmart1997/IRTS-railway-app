import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import { GetDataProvider } from '../../providers/get-data/get-data';
import { DashboardPage } from '../dashboard/dashboard';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  name : string = '';
  username : string = '';
  password : string = '';
  title : string = '';
  message : string = '';
  batch : Number;
  dob :string = '';
  email : string;
  mobile : string;





  constructor(public navCtrl: NavController, public navParams: NavParams, private alert : AlertController, private service : GetDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  showAlert(title,message){
    const alert = this.alert.create({
      title: title ,
      subTitle: message ,
      buttons: ['OK']
    });

    alert.present();
  }

  loginUser(){
    this.navCtrl.setRoot(HomePage);
  }

  signUpUser(){
    if(this.username == '' || this.username == undefined || this.password == '' || this.password == undefined || this.name == '' || this.name == undefined ) {
      this.title = 'Please Provide Alle The Credentials';
      this.message = 'Please Try Again';
      
      this.showAlert(this.title,this.message);
    }else{
      const user : any = {};
      user.name  =  this.name;
      user.username = this.username;
      user.password = this.password;
      user.dob = this.dob;
      user.batch = this.batch;
      user.email = this.email;
      user.mobile = this.mobile;

      console.log(user);
      this.service.postUser(user).subscribe((res) => {
        console.log(res);
        if(res.status){
            this.title = res.message;
            this.message = 'Redirecting to Dashboard...';
            this.showAlert(this.title,this.message);
           this.navCtrl.push(DashboardPage , {
             user : res.user
           });
        }else{
          this.title = res.message;
          this.message = 'Please Try Again';
          this.showAlert(this.title,this.message);
        }
      });
    }
  }

}
