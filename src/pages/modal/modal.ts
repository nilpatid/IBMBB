import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
	
import { Flashlight } from '@ionic-native/flashlight';
import { ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  message: string[] = ['S','O','S',' ','I',' ','N','E','E','D',' ','H','E','L','P',' ','P','L','E','A','S','E',' ','H','E','L','P',' ','M','E'];
  
  morse: String[] = [ ".----", "..---", "...--", "....-", ".....", 
  "-....", "--...", "---..", "----.", "-----", ".-", "-...", "-.-.", "-..", 
  ".","..-.","--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", 
  ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", 
  "--.."];

  led: any  = 13;
  speaker: any  = 'A5'; // LED
  dotLen: number  = 200; //delay in milliseconds
  dashLen: number = 3 * this.dotLen; // 3X longer than the dot
  wordLen: number = 7* this.dotLen; // space between words.
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private flashlight: Flashlight,public viewCtrl : ViewController , public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  openContactModal(){ 
    var modalPage = this.modalCtrl.create('EmergencyPage'); 
    modalPage.present(); 
  } 
  openBattryModal(){ 
    var modalPage = this.modalCtrl.create('SaveBattryPage'); 
    modalPage.present(); 
  } 
  openSurvModal(){ 
    var modalPage = this.modalCtrl.create('SurvivalPage'); 
    modalPage.present(); 
  } 
  public closeModal(){
    this.viewCtrl.dismiss();
}

runflesh(){
  console.log("calling loop ")
  this.loop();
}

async signalMorse(c: String) {
  console.log("in morse code")
  let i: number = 0; 
  while (c[i]) { // for each dot or dash in the letter...
    this.flashlight.toggle(); // turn the LED on
    console.log("light on")
    //tone(speaker, 450); // speaker plays a tone of 450 hertz
    if (c[i] == '.') { 
      await this.delay(this.dotLen); // if dot, short delay
    } else if (c[i] == '-') {
      await this.delay(this.dashLen); // if dash, longer delay
    }
    this.flashlight.toggle(); //LED off
    console.log("light off")
    //noTone(speaker); // speaker off
    await this.delay(this.dotLen); 
    i++;    //bring in the next dot or dash from the morse letter!]'
  };
  // We already delayed one dot length in the loop. A Word break = dashLen..
  await this.delay(this.dashLen-this.dotLen); 

}

async loop() {
  console.log("in loop ")
  let i: number = 0; //counter variable to move through the array
  let C: String ; //holds each letter as it gets converted to blinks
  while (this.message[i]) { // fails when reaches the end of the string ("0")
  console.log("in loop while")
    C = this.message[i].toUpperCase();
        
    if (C == ' ') {
      await this.delay(this.wordLen); // space between words  
    } 
    else if (C.charCodeAt(0)>47 && C.charCodeAt(0)<58) {  // 0-9. ASCII 48-57
      this.signalMorse(this.morse[C.charCodeAt(0)-48]);
    } 
    else if (C.charCodeAt(0)>64 && C.charCodeAt(0)<91) {  // A-Z, ASCII 65-90, 10-34 in morse[]
      this.signalMorse(this.morse[C.charCodeAt(0)-55]);
    }
    else {
      await this.delay(this.wordLen);
    }
    i++; // move to the next character in your message
  }
  await this.delay(2 * this.wordLen);
  console.log("exit loop ")
}

delay(ms: number) {
  console.log("in delay ")
  return new Promise( resolve => setTimeout(resolve, ms) );
}
}
