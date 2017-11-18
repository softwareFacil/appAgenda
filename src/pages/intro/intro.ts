import { HomePage } from './../home/home';
import { AjustesProvider } from './../../providers/ajustes/ajustes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';



/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Saltar";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _ajustes:AjustesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  saltar(){
    this._ajustes.ajustes.mostrar_tutorial = false;
    this._ajustes.guardar_storage();

    this.navCtrl.setRoot(HomePage);
  }

  slideChanged(){
    if (this.slides.isEnd()) {
      this.skipMsg = "vale, lo tengo"
    }
  }

}
