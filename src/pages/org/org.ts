import { ObtenerProvider } from './../../providers/obtener/obtener';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the OrgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-org',
  templateUrl: 'org.html',
})
export class OrgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController, private _obs:ObtenerProvider) {
    this._obs.getOrg().subscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgPage');
  }

  menuToogle(){
    this.menuCtrl.toggle();
  }

  recargar(refresher:any){
    setTimeout(() => {
      this._obs.getOrg().subscribe();
      refresher.complete();
    }, 1000);
  }

  icon(imagen:string){
    return "http://agenda.publibarrio.cl:3789/api/get-icon/" + imagen;
  }

  imagen(imagen:string){
    return "http://agenda.publibarrio.cl:3789/api/get-img/" + imagen;
  }

}
