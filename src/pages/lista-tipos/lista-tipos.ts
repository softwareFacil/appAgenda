import { ObtenerProvider } from './../../providers/obtener/obtener';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Toast } from '@ionic-native/toast';
import { DescripPage } from '../descrip/descrip';


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
  lugar:string;
  casoL;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _obs:ObtenerProvider, private socialSharing: SocialSharing, private toast: Toast) {
    this.tipo = this.navParams.get("tipo");
    this.lugar = this.navParams.get("lugar");
    this.casoL = this.navParams.get("casoL");
    console.log(this.tipo);
    if (this.casoL) {
      this._obs.getEventOBySpace(this.lugar).subscribe();
    } else {
      this._obs.getEventosType(this.tipo).subscribe();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTiposPage');
  }

  imagen(imagen:string){
    return "http://agenda.publibarrio.cl:3789/api/get-img/" + imagen;
  }

  icon(imagen:string){
    return "http://agenda.publibarrio.cl:3789/api/get-icon/" + imagen;
  }

  compartir(evento:any){
    this.socialSharing.share(evento.name, evento.tipo, this.imagen(evento.image), "http://agenda.publibarrio.cl/#/view/" + evento._id).then(()=>{
      
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
      if (this.casoL) {
        this._obs.getEventOBySpace(this.lugar).subscribe();
      } else {
        this._obs.getEventosType(this.tipo).subscribe();
      }
      refresher.complete();
    }, 1000);
  }

  info(evento:any){
    this.navCtrl.push(DescripPage, {"evento":evento});
  }

}
