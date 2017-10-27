import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ObtenerProvider } from "../../providers/obtener/obtener";
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventos:Observable<any[]>;

  constructor(public navCtrl: NavController, private menuCtrl:MenuController,
               private _obs:ObtenerProvider, private statusBar: StatusBar, 
               private socialSharing: SocialSharing, private toast: Toast) {
    this.statusBar.backgroundColorByHexString('#69d0b3');
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

  imagen(imagen:string){
    return "http://agenda.publibarrio.cl:3789/api/get-img/" + imagen;
  }

}
