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
  catergories:any [] = [];
  lugares:any [] = [];
  org:any [] = [];
  tipoOrg:any [] = [];
  url = "http://agenda.publibarrio.cl:3789/api/";

  constructor(private http: Http) {
    console.log('Hello ObtenerProvider Provider');
  }

  getEventos(){
    return this.http.get(this.url + "events/").map(res =>{
      //console.log(res.json().events);

      this.eventos = res.json().events;
      console.log(this.eventos);
      return res.json().events;
    })
  }

  getEventosType(tipo:string){
    return this.http.get(this.url + "getEventsByType/" + tipo).map(res =>{
      //console.log(res.json().events);

      this.eventos = res.json().events;
      console.log(this.eventos);
      return res.json().events;
    })
  }

  getEventOByOrganization(org:string){
    return this.http.get(this.url + "getEventsByOrg/" + org).map(res =>{
      //console.log(res.json().events);

      this.eventos = res.json().events;
      console.log(this.eventos);
      return res.json().events;
    })
  }

  getEventOBySpace(space:string){
    return this.http.get(this.url + "getEventsBySpace/" + space).map(res =>{
      //console.log(res.json().events);

      this.eventos = res.json().events;
      console.log(this.eventos);
      return res.json().events;
    })
  }

  getCategorias(){
    return this.http.get(this.url + "getCategories/").map(res =>{
      //console.log(res.json().events);

      this.catergories = res.json().Catergories;
      console.log(this.catergories);
      return res.json().Catergories;
    })
  }

  getLugares(){
    return this.http.get(this.url + "getLocations/").map(res =>{
      //console.log(res.json().events);

      this.lugares = res.json().Locations;
      console.log(this.lugares);
      return res.json().Locations;
    })
  }

  getOrg(){
    return this.http.get(this.url + "getOrganization/").map(res =>{
      //console.log(res.json().events);

      this.org = res.json().usuario;
      console.log(this.org);
      return res.json().usuario;
    })
  }

  getTipoOrg(){
    return this.http.get(this.url + "getTypes/").map(res =>{
      //console.log(res.json().events);

      this.tipoOrg = res.json().Tipos;
      console.log(this.tipoOrg);
      return res.json().Tipos;
    })
  }

}
