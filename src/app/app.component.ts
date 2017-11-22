import { OrgPage } from './../pages/org/org';
import { IntroPage } from './../pages/intro/intro';
import { AjustesProvider } from './../providers/ajustes/ajustes';
import { LugaresPage } from './../pages/lugares/lugares';
import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TiposPage } from "../pages/tipos/tipos";

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  home = HomePage;
  tipos = TiposPage;
  lugares = LugaresPage;
  intro = IntroPage;
  org = OrgPage;
  splash = true;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl:MenuController, private _ajustes:AjustesProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      setTimeout(()=>{
        this.splash = false;
        console.log(this.splash);
      }, 3200);
      this._ajustes.cargar_storage().then(()=>{
        if (this._ajustes.ajustes.mostrar_tutorial) {
          this.rootPage = IntroPage;
        } else {
          this.rootPage = HomePage;
        }
      })

    });
  }

  abrirPage(pagina:any){
    this.rootPage = pagina;
    this.menuCtrl.toggle();
  }
}

