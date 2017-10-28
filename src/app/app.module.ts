import { ListaTiposPage } from './../pages/lista-tipos/lista-tipos';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TiposPage } from "../pages/tipos/tipos";
import { DescripPage } from "../pages/descrip/descrip";
//database
import { ObtenerProvider } from '../providers/obtener/obtener';
import { HttpModule } from '@angular/http';

// plugins
import { SocialSharing } from '@ionic-native/social-sharing';
import { Toast } from '@ionic-native/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TiposPage,
    ListaTiposPage,
    DescripPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Atras'
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TiposPage,
    ListaTiposPage,
    DescripPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ObtenerProvider,
    SocialSharing,
    Toast
  ]
})
export class AppModule {}
