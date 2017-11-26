import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the UbicacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UbicacionProvider {
  private lat:number;
  private lon:number;
  
  constructor(private geolocation: Geolocation) {
    console.log('Hello UbicacionProvider Provider');
  }

  currentPosition(){
    let promesa = new Promise((resove, reject)=>{
      this.geolocation.getCurrentPosition().then((resp)=>{
        this.lat = resp.coords.latitude;
        this.lon = resp.coords.longitude;
        resove();
      }).catch((error)=>{
        console.error(error);
      })
    });
    return promesa;
  }

  getLat(){
    return this.lat;
  }

  getLon(){
    return this.lon;
  }


}
