import { Injectable } from '@angular/core';
import { Socket } from './socket';

@Injectable()
export class SocketService extends Socket {
  constructor() {
    super({url: 'ws://localhost:3000'});
  }
}
