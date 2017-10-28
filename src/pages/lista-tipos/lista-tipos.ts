import { ObtenerProvider } from './../../providers/obtener/obtener';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Toast } from '@ionic-native/toast';


/**
 * Generated class for the ListaTiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-tipos',
  templateUrl: 'lista-tipos.html',
})
export class ListaTiposPage {
  tipo:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _obs:ObtenerProvider, private socialSharing: SocialSharing, private toast: Toast) {
    this.tipo = this.navParams.get("tipo");
    console.log(this.tipo);
    this._obs.getEventosType(this.tipo).subscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTiposPage');
  }

  imagen(imagen:string){
    return "http://agenda.publibarrio.cl:3789/api/get-img/" + imagen;
  }

  compartir(evento:any){
    this.socialSharing.share(evento.name, evento.tipo, this.imagen(evento.image), "http://agenda.publibarrio.cl").then(()=>{
      
    }).catch(()=>{
      this.toast.show(`No fue compartido!!`, '3000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

  recargar(refresher:any){
    setTimeout(() => {
      this._obs.getEventosType(this.tipo).subscribe();
      refresher.complete();
    }, 1000);
  }

}