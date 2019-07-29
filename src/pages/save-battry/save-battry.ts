import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the SaveBattryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save-battry',
  templateUrl: 'save-battry.html',
})
export class SaveBattryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaveBattryPage');
  }
  public closeModal(){
    this.viewCtrl.dismiss();
}
}
