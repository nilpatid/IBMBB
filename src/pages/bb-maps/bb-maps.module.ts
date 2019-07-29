import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BBMapsPage } from './bb-maps';
import { ComponentsModule } from '../../components';

@NgModule({
  declarations: [
    BBMapsPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BBMapsPage)
  ],
  exports: [
    BBMapsPage
  ]
})
export class BBMapsPageModule {
}
