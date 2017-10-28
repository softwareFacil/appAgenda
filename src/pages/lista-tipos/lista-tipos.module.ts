import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaTiposPage } from './lista-tipos';

@NgModule({
  declarations: [
    ListaTiposPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaTiposPage),
  ],
})
export class ListaTiposPageModule {}
