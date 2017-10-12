import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventos:Observable<any[]>;

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, private menuCtrl:MenuController) {
    this.eventos = afDB.list('/actividades').valueChanges();
  }

  menuToogle(){
    this.menuCtrl.toggle();
  }

}
