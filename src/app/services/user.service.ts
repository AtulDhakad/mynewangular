

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiurlService } from './apiurl.service';
import {User} from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,) { }

  register(user: User) {
    return this.http.post(`${ApiurlService.Register}`, user);
  }

  getAll() {
    return this.http.get<User[]>(`${ApiurlService.Allusers}`);
 }

 deleteUser(id){

 }


}
