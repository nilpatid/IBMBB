import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
// import { mapbox } from '../../../src/mapbox.js';
import "leaflet";
import "leaflet-tilelayer-mbtiles-ts";
// import { Http } from '@angular/http';

import { ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
 

declare var L: any;

@IonicPage()
@Component({
  selector: 'maps-bb',
  templateUrl: 'bb-maps.html'
})
export class BBMapsPage {
  places: string = "Select";
  map: L.Map;
  center: L.PointTuple;
  lat = 0;
  lng = 0;
  alt = 0;
  initializeCount = 0;
  

  

  constructor(public navCtrl: NavController, private platform: Platform,
    public modalCtrl : ModalController,private geolocation: Geolocation) { }
  
    openMYModal(){ 
      var modalPage = this.modalCtrl.create('ModalPage'); 
      modalPage.present(); 
    }   

  ionViewDidEnter() {
    let places = this.places;
    let initializeCount = this.initializeCount;
   // let fileTransfer: FileTransferObject = this.fileTransfer.create();
    // let file = this.file;
    let lat: any;
    let lng: any;
    let tileX: any;
    let tileY: any;
    let map: any;

    
   // let storageLocation: any;
    console.log(this.platform);

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude; 
      

      console.log(tileX,tileY);

    tileY = (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,14)));
    tileX = (Math.floor((lng+180)/360*Math.pow(2,14)));
   
    
    console.log(tileX,tileY);
 
      if(initializeCount === 0) {
        map = L.map('map', {
          center: [lat, lng],
          zoom: 15,
          minZoom: 15,
          maxZoom: 18,
          attributionControl: true,
          zoomControl: true
        });

        L.tileLayer("http://a.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
          L.marker([19.2198, 72.9618]).addTo(map);
          L.marker([19.1357, 73.0019]).addTo(map);
      } else {
          L.marker([19.2198, 72.9618]).addTo(map);
          L.marker([19.1357, 73.0019]).addTo(map);
      }
      console.log(places);
     }).catch((error) => {
       console.log('Error getting location'+ JSON.stringify(error));


       this.lat = 19.0330;
      this.lng = 73.0297;
      

     
    console.log(tileX,tileY);
 
      if(initializeCount === 0) {
        map = L.map('map', {
          center: [19.0330, 73.0297],
          zoom: 15,
          minZoom: 15,
          maxZoom: 18,
          attributionControl: true,
          zoomControl: true
        });

        L.tileLayer("http://a.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
          L.marker([19.2198, 72.9618]).addTo(map);
          L.marker([19.1357, 73.0019]).addTo(map);
      } else {
          L.marker([19.2198, 72.9618]).addTo(map);
          L.marker([19.1357, 73.0019]).addTo(map);
      }
      console.log(places);
     });


    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function (response) { 
    //     console.log(response);
    //     lat = response.coords.latitude;
    //     lng = response.coords.longitude;

       
    // console.log(tileX,tileY);

    // tileY = (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,14)));
    // tileX = (Math.floor((lng+180)/360*Math.pow(2,14)));
   
    
    // console.log(tileX,tileY);
 
    //   if(initializeCount === 0) {
    //     map = L.map('map', {
    //       center: [lat, lng],
    //       zoom: 15,
    //       minZoom: 15,
    //       maxZoom: 18,
    //       attributionControl: true,
    //       zoomControl: true
    //     });

    //     L.tileLayer("http://a.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    //       L.marker([19.2198, 72.9618]).addTo(map);
    //       L.marker([19.1357, 73.0019]).addTo(map);
    //   } else {
    //       L.marker([19.2198, 72.9618]).addTo(map);
    //       L.marker([19.1357, 73.0019]).addTo(map);
    //   }
    //   console.log(places);
    //   }, function () {
    //     alert("Unable to get GPS Location");
    //   }, {
    //       enableHighAccuracy: true
    //   });
    // } else {

      
      
    // } 
    
  }

  updateData(event) { debugger;
    this.initializeCount++;
    this.ionViewDidEnter();
    console.log(event.target.value);


    console.log(this.places);

   
  }

  
}
