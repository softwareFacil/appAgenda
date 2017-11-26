import { UbicacionProvider } from './../../providers/ubicacion/ubicacion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ObtenerProvider } from "../../providers/obtener/obtener";


/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  private lat:number;
  private lon:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _obs:ObtenerProvider, private _ubicacion:UbicacionProvider, private menuCtrl:MenuController) {
    this._obs.getEventos().subscribe();
    this._ubicacion.currentPosition().then(()=>{
      this.lat = this._ubicacion.getLat();
      this.lon = this._ubicacion.getLon();    
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  menuToogle(){
    this.menuCtrl.toggle();
  }

}
