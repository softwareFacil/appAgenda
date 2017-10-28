import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';



/**
 * Generated class for the DescripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descrip',
  templateUrl: 'descrip.html',
})
export class DescripPage {
  evento: any;
  map: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber, private alerCtrl: AlertController) {
    this.evento = this.navParams.get("evento");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescripPage');
  }
  ionViewDidLeave() {
    this.map = false;
  }

  imagen(imagen: string) {
    return "http://agenda.publibarrio.cl:3789/api/get-img/" + imagen;
  }

  icon(imagen: string) {
    return "http://agenda.publibarrio.cl:3789/api/get-icon/" + imagen;
  }

  mostrarMapa() {
    if (this.map) {
      this.map = false;
    } else {
      this.map = true;
    }
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
