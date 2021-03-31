import * as io from 'socket.io-client';
import { SocketIOConfig } from './socket.config';

export class Socket {
  protected socket;

  constructor(config: SocketIOConfig) {
    this.socket = io.connect(config.url);
  }

  on(event: string, callback: (payload) => void) {
    this.socket.on(event, callback);
  }

  emit(event: string, payload: any) {
    this.socket.emit(event, payload);
  }
}