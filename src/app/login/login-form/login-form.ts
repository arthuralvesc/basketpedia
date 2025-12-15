import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserData } from '../models/user-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm {
    isNewUser = false;
    userData: UserData = {
        user: '',
        password: ''
    }
    constructor(private loginService: LoginService) {}

    login() {
      this.loginService.login(this.userData);
    };
    register(){
      this.loginService.register(this.userData);
    }
    changeForm(){
      this.isNewUser = !this.isNewUser;
      console.log(this.isNewUser);
    }
}

