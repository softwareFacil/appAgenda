import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  evento:any;
  map:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.evento = this.navParams.get("evento");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescripPage');
  }
  ionViewDidLeave(){
   this.map = false;
  }

  imagen(imagen:string){
    return "http://agenda.publibarrio.cl:3789/api/get-img/" + imagen;
  }

  icon(imagen:string){
    return "http://agenda.publibarrio.cl:3789/api/get-icon/" + imagen;
  }

  mostrarMapa(){
    if (this.map) {
      this.map = false;
    }else{
      this.map = true;
    }
    
  }

}
