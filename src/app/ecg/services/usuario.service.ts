import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebSocketsService } from './web-sockets.service';
import { usuarios } from '../interface/user.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public user: usuarios = {
    name: '',
    mail: '',
    password: '',
  };

  constructor(
    private http: HttpClient,
    public webSocket: WebSocketsService,
    public router: Router
  ) {}

  register(nombre_medico: string, mail: string, password: String) {
    return new Promise((resolve, reject) => {
      const body = {
        mail,
        password,
        nombre_medico,
      };
      this.http
        .post(environment.wsUrl + '/api/medico/auth/register', body)
        .subscribe((resp: any) => {
          resolve(resp);
        });
    });
  }

  loginUser(mail: string, password: string) {
    return new Promise((resolve, reject) => {
      const body = {
        mail,
        password,
      };
      this.http
        .post(environment.wsUrl + '/api/medico/auth/login', body)
        .subscribe((resp: any) => {
          this.setStorage('x-token', resp.token);
          this.setStorage('inSession', 'true');
          this.webSocket.loginWs(resp.token);
          resolve(resp);
        });
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      const token = this.getStorage('x-token');
      const body = {
        token,
      };
      this.http
        .post(environment.wsUrl + '/api/medico/auth/logout', body)
        .subscribe((resp: any) => {
          this.removeStorage('x-token');
          this.removeStorage('inSession');
          this.webSocket.logoutWs();
          resolve(resp);
        });
    });
  }

  setStorage(nombre: string, value: string) {
    localStorage.setItem(nombre, value);
  }
  getStorage(nombre: string) {
    return localStorage.getItem(nombre);
  }

  removeStorage(nombre: string) {
    localStorage.removeItem(nombre);
  }
}
