import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the SurvivalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survival',
  templateUrl: 'survival.html',
})
export class SurvivalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencyPage');
  }
  public closeModal(){
    this.viewCtrl.dismiss();
}

}
