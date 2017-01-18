import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userName : String;
  password : String;

  constructor(public navCtrl: NavController) {
    
  }
 logEvent(event) {
    console.log(this.userName);
    console.log(this.password);
  }
}
