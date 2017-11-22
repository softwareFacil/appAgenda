import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the Descrip2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descrip2',
  templateUrl: 'descrip2.html',
})
export class Descrip2Page {

  org:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alerCtrl: AlertController, private callNumber: CallNumber) {
    this.org = this.navParams.get('org');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Descrip2Page');
  }

  icon(imagen:string){
    return "http://agenda.publibarrio.cl:3789/api/get-icon/" + imagen;
  }

  llamar(num) {
    let confirm = this.alerCtrl.create({
      title: '¿Seguro?',
      message: '¿Estas seguro que quieres llamar a ' + num + '?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Llamar',
          handler: () => {
            console.log('Agree clicked');
            this.callNumber.callNumber(num, true)
              .then(() => console.log('Launched dialer!'))
              .catch(() => console.log('Error launching dialer'));
          }
        }
      ]
    });
    confirm.present()
  }

}
