import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient){}
  login(userData: UserData) {
    console.log('fazendo login', userData);
  }
  register(userData: UserData) {
    console.log('registrando novo usuário', userData)
  }
}
