import { DescripPage } from './../descrip/descrip';
import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, private menuCtrl:MenuController,
               private _obs:ObtenerProvider, private statusBar: StatusBar,
               private socialSharing: SocialSharing, private toast: Toast, private loadingCtrl: LoadingController) {


    this.statusBar.backgroundColorByHexString('#ea9713');
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
    let loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
    loader.present();
    this.socialSharing.share(evento.name, evento.tipo, this.imagen(evento.image), "http://agenda.publibarrio.cl/#/view/" + evento._id).then(()=>{
      loader.dismiss();
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

  icon(imagen:string){
    return "http://agenda.publibarrio.cl:3789/api/get-icon/" + imagen;
  }

  info(evento:any){
    this.navCtrl.push(DescripPage, {"evento":evento});
  }

}
