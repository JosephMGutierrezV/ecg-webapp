import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';
import { usuarios } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class WebSocketsService {
  public socketStatus: boolean = false;
  public usuario: usuarios = {};

  constructor(private socket: Socket, private router: Router) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      const token = this.getStorage('x-token');
      console.log('Conectado al servidor de scokets');
      this.socketStatus = true;
      this.emitir('check-status', { token }, (resp: any) => {});
    });

    this.socket.on('disconnect', () => {
      console.log('DesConectado al servidor de scokets');
      this.socketStatus = false;
    });
  }

  loginWs(token: string) {
    this.emitir('login', { token }, (resp: any) => {});
  }

  logoutWs() {
    this.emitir('logout', (resp: any) => {});
  }

  emitir(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento, payload, callback);
  }

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }

  getStorage(name: string) {
    return localStorage.getItem(name);
  }
}
