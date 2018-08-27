import { Component } from '@angular/core';
import { NavController , AlertController, Platform} from 'ionic-angular';

import { GetDataProvider } from '../../providers/get-data/get-data';
import { SignupPage } from '../signup/signup';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username : string = '' ;
  password : string = '' ;
  title : string = '';
  message : string = '';
  constructor(private platform : Platform ,public navCtrl: NavController, private alertCtrl : AlertController , private service : GetDataProvider) {
      this.platform.ready().then(() => {
          console.log(platform.width());
          if(platform.width() > 450 ){
            console.log('Tabs');
          }
      });
  }

  showAlert(title,message){
    const alert = this.alertCtrl.create({
      title: title ,
      subTitle: message ,
      buttons: ['OK']
    });

    alert.present();
  }

  loginUser(){
    console.log('Function Called');
    if(this.username == '' || this.username == undefined || this.password == '' || this.password == undefined) {
      this.title = 'Please Provide All The Credentials';
      this.message = 'Please Try Again...';
      
      this.showAlert(this.title,this.message);
    }else{
      const user : any = {};
      user.username = this.username;
      user.password = this.password;

      this.service.getUser(user).subscribe((res) =>{
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

      this.username = '';
      this.password = '';
        
      });
    }

  }

  signupUser(){
    this.navCtrl.push(SignupPage);
  }

}
