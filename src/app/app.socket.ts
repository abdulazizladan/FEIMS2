import { Injectable, OnInit } from "@angular/core";
import { SocketService } from "./socket/socket.service";

@Injectable({
  providedIn: 'root'
})
export class AppSocket {
  constructor(private socket: SocketService) {
  }

  onConnect() {
    return this.socket.fromEvent('connect');
  }

  onLogin({token, user}) {
    this.socket.emit('LOGIN', {token, user});
    return this.socket.fromOneTimeEvent('EVENT:USER:LOGIN');
  }

  onLogout() {
    this.socket.emit('LOGOUT');
    return this.socket.fromOneTimeEvent('EVENT:USER:LOGOUT');
  }
}