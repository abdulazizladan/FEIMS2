import { Injectable, OnInit } from "@angular/core";
import { SocketService } from "./socket/socket.service";

@Injectable({
  providedIn: 'root'
})
export class AppSocket {
  constructor(private socket: SocketService) {
  }

  onConnect() {
    this.socket.on('connect', () => {
      console.log('socket connected');
    });
  }

  onLogin({token, user}) {
    return this.socket.emit('EVENT:USER:LOGIN');
  }
}