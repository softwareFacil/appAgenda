import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ObtenerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ObtenerProvider {

  eventos:any [] = [];
  url = "http://agenda.publibarrio.cl:3789/api/events/";

  constructor(private http: Http) {
    console.log('Hello ObtenerProvider Provider');
  }

  getEventos(){
    return this.http.get(this.url).map(res =>{
      //console.log(res.json().events);

      this.eventos = res.json().events;
      console.log(this.eventos);
      return res.json().events;
    })
  }

}
