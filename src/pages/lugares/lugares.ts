import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ListaTiposPage } from './../lista-tipos/lista-tipos';
import { ObtenerProvider } from "../../providers/obtener/obtener";

/**
 * Generated class for the LugaresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugares',
  templateUrl: 'lugares.html',
})
export class LugaresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController, private _obs:ObtenerProvider) {
    this._obs.getLugares().subscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugaresPage');
  }

  selectTipo(tipo:string){
    this.navCtrl.push(ListaTiposPage,{ 'tipo':tipo });
  }

  menuToogle(){
    this.menuCtrl.toggle();
  }

}
