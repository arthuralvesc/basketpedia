import { Component } from '@angular/core';
import { LoginForm } from './login-form/login-form';
import { UserData } from './models/user-data';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  imports: [LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private loginService: LoginService) {}

}
