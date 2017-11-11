import { ListaTiposPage } from './../lista-tipos/lista-tipos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ObtenerProvider } from "../../providers/obtener/obtener";



/**
 * Generated class for the TiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipos',
  templateUrl: 'tipos.html',
})
export class TiposPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController, private _obs:ObtenerProvider) {
    this._obs.getCategorias().subscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiposPage');
  }

  selectTipo(tipo:string){
    this.navCtrl.push(ListaTiposPage,{ 'tipo':tipo, 'casoL':false });
  }

  menuToogle(){
    this.menuCtrl.toggle();
  }

}
