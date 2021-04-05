import { Injectable } from '@angular/core';
import { Socket } from './socket';
import { SocketIOConfig } from './socket.config';
export class SocketService extends Socket {
  constructor(config: SocketIOConfig) {
    super(config);
  }
}
