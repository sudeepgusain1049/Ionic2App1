import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Login} from '../models/login'
import 'rxjs/add/operator/map';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {

  constructor(public http: Http) {
    
  }

  authenticate(login: Login) : boolean {
    console.log(login);
    if(login.userName == "" && login.password == "")
    {

    }
    return true;
  }

}
