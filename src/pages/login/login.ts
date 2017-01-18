import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../providers/user';
import { Login } from '../models/login';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  userLogin : Login;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  SignIn()
  {
   var t = UserService.authenticate(this.userLogin);
   console.log('Login:' + t);
  }

  RegisterUser()
  {
    
  }
}
