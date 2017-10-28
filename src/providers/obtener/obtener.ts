import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
  url2 = "http://agenda.publibarrio.cl:3789/api/type-event/";

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

  getEventosType(tipo:string){
    let body = "type="+tipo;
    let headers = new Headers({
      'Content-Type':'application/x-www-form-urlencoded'
    });

    return this.http.post(this.url2, body, {headers}).map(res =>{
      this.eventos = res.json().typeEvent;
      console.log(this.eventos);
      return res.json().events;
    })
  }

}
