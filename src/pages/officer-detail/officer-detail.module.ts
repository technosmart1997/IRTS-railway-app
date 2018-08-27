import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficerDetailPage } from './officer-detail';

@NgModule({
  declarations: [
    OfficerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficerDetailPage),
  ],
})
export class OfficerDetailPageModule {}
