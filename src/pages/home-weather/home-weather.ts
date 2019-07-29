import { Component, EventEmitter } from '@angular/core';
import { IonicPage, ModalController, AlertController } from 'ionic-angular';
import { CONFIG, DatabaseService, Location } from '../../providers';
import { NavController } from "ionic-angular";
// import { BBMapsPage } from '../bb-maps/bb-maps';
// import { LeafletPage } from '../leaflet-maps/leaflet-maps';
import { BBMapsPage } from '../bb-maps/bb-maps';

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-home-weather',
  templateUrl: 'home-weather.html'
})
export class HomeWeatherPage {
  onInitEmitter: EventEmitter<string>;
  onDestroyEmitter: EventEmitter<string>;
  location: Location;
  public isToggled: boolean = false;
  panicFlag: string = "";

  constructor(private navCtrl: NavController,public databaseService: DatabaseService,public alertCtrl: AlertController,
    public modalCtrl: ModalController) {
    this.onInitEmitter = new EventEmitter<string>();
    this.onDestroyEmitter = new EventEmitter<string>();
  }

  ionViewWillEnter() {
    let self = this;
    this.databaseService.getJson(CONFIG.HOME_LOCATION).then(data => {
      if (data === null) {
        let modal = self.modalCtrl.create('LocationPage', { heading: 'Enter Home City', showCancel: false });
        modal.onDidDismiss((data: Location) => {
          console.debug('page > modal dismissed > data > ', data);
          if (data) {
            self.databaseService.setJson(CONFIG.HOME_LOCATION, data);
            self.location = data;
            self.emitInit();
          }
        });
        modal.present();
      } else {
        self.location = data;
        self.emitInit();
      }
    });
  }

  emitInit() {
    if (this.onInitEmitter) {
      this.onInitEmitter.emit('');
    }
  }

  ionViewWillLeave() {
    if (this.onDestroyEmitter) {
      this.onDestroyEmitter.emit('');
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Panic Mode On',
      subTitle: 'Please choose the type of Emergency!',
      enableBackdropDismiss: false,
      buttons: [
        
      {
        text: 'Flood',
        handler: () => {
          this.isToggled = false;
         // this.navCtrl.push(LeafletPage);
          this.navCtrl.push(BBMapsPage);
        }
      },
      {
        text: 'Cyclone',
        handler: () => {
          this.isToggled = false;
          this.navCtrl.push(BBMapsPage);
         // this.navCtrl.push(LeafletPage);
        }
      },
      {
        text: 'Tsunami',
        handler: () => {
          this.isToggled = false;
          this.navCtrl.push(BBMapsPage);
          //this.navCtrl.push(LeafletPage);
        }
      },
      {
        text: 'Dismiss',
        role: 'cancel',
        handler: () => {
          this.isToggled = false;
        }
      }

    ]
    });
    alert.present();
  }

  notify() {
    if(this.isToggled === true) {
      this.panicFlag = "On";
      this.presentAlert();
    } else {
      this.panicFlag = "Off";
    }
  }
}
