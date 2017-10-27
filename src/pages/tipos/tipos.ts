import { TIPOS } from './../../data/data.tipos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


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

  tipos:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController) {
    this.tipos = TIPOS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiposPage');
  }

  selectTipo(tipo:string){

  }

  menuToogle(){
    this.menuCtrl.toggle();
  }

}
