import { Component, OnInit } from '@angular/core';
import { usuarios } from '../../interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: usuarios = {
    password: '',
    mail: '',
    name: '',
    confirPassword: '',
  };
  accion: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  ingresar() {}

  goToRegister() {
    this.accion = false;
  }

  registrar() {}

  goToLogin() {
    this.accion = true;
  }
}
