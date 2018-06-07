import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contact={
    name:'Toure',
    email:'n.toure5165@zig.univ.sn',
    photo:'./assets/imgs/logo.png'
  }

  constructor(public navCtrl: NavController) {

  }

}
