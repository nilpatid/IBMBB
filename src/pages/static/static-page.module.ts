import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaticPage } from './static-page';
import { ComponentsModule } from '../../components';

@NgModule({
  declarations: [
    StaticPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StaticPage)
  ],
  exports: [
    StaticPage
  ]
})
export class StaticPageModule {
}
