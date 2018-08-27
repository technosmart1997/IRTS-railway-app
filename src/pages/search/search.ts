import { Component } from '@angular/core';
import { NavController, NavParams , AlertController } from 'ionic-angular';
import { GetDataProvider } from '../../providers/get-data/get-data';
import { OfficerDetailPage } from '../officer-detail/officer-detail';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
heading : string = '';
placeholer : string = '';
id : Number;
grade :string = 'CRB';
officers: any;
search_value : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private service : GetDataProvider, private alertCtrl : AlertController ) {
    
    this.id  = this.navParams.get('value');
    // console.log(this.id);
    if(this.id != null){
      if(this.id == 0){
        this.heading = 'Serach Batch Wise';
        this.placeholer = 'Enter Batch';
      }if(this.id == 1){
        this.heading = "Search Zone Wise";
        this.placeholer = 'Enter Zone';
      }if(this.id == 2){
        this.heading = "Search Grade Wise";
        this.placeholer = 'Enter Grade';
      }if(this.id == 3){
        this.heading = "Search Posted Wise";
        this.placeholer = 'Enter Posting';
      }
    }
   
  }

  ionViewDidLoad() {
  
  }

  getGrade(v){
    if(v != null){
      const grade : any = {};

      grade.g = v;
      this.service.getByGrade(grade).subscribe(res =>{
        // console.log(res);
        if(res.status){
          this.officers = res.officers;
        }
      })
    }
  }

  searchQuery(){
    let s = this.search_value;
  
    if(s == '' || s == undefined){
      const alert = this.alertCtrl.create({
        title: 'Search Query Is Empty',
        buttons: ['OK']
      });
      alert.present();
    }else{
      // console.log('GetData');
      if(this.id == 0){
        const batch : any = {};
        batch.b = s;
         this.service.getByBatch(batch).subscribe(res => {
          //  console.log(res);
           if(res.status){
             this.officers = res.officers;
           }
         });
       } 

      if(this.id == 1){
       const zone : any = {};
       zone.z = s;
        this.service.getByZone(zone).subscribe(res => {
          // console.log(res);
          if(res.status){
            this.officers = res.officers;
          }
        });
      } 

      if(this.id == 3){
        const post : any = {};

        post.p = s;
        this.service.getByPost(post).subscribe(res =>{
          // console.log(res);
          if(res.status){
            this.officers = res.officers;
          }
        })
      }
    }
  }


  itemSelected(officer){
    this.navCtrl.push(OfficerDetailPage , {
      officer : officer
    })
  }

}
