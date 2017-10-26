import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ObtenerProvider } from "../../providers/obtener/obtener";
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventos:Observable<any[]>;

  constructor(public navCtrl: NavController, private menuCtrl:MenuController, private _obs:ObtenerProvider, private statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString('#4ad52e');
    this._obs.getEventos().subscribe();
  }

  menuToogle(){
    this.menuCtrl.toggle();
  }

  recargar(refresher:any){
    setTimeout(() => {
      this._obs.getEventos().subscribe();
      refresher.complete();
    }, 1000);
  }

}
