import { Component, OnInit } from '@angular/core';
import { usuarios } from '../../interface/user.interface';
import { WebSocketsService } from '../../services/web-sockets.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

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

  constructor(
    public webSocket: WebSocketsService,
    private router: Router,
    private userService: UsuarioService
  ) {}

  ngOnInit(): void {}

  async ingresar() {
    await this.userService
      .loginUser(this.user.mail!, this.user.password!)
      .then((resolve) => {
        console.log(resolve);
        this.router.navigateByUrl('/panel-control-holters');
      });
  }

  goToRegister() {
    this.accion = false;
  }

  async registrar() {
    await this.userService
      .register(this.user.name!, this.user.mail!, this.user.password!)
      .then((resolve) => {
        console.log(resolve);
        this.accion = true;
      });
  }

  goToLogin() {
    this.accion = true;
  }
}
