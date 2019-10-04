import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiurlService {

 static Login : string = environment.apidomain.concat('/serverport/login');
 static Register : string = environment.apidomain.concat('/serverport/add');
 static Allusers : string = environment.apidomain.concat('/serverport/allusers');

  constructor() { }
}
