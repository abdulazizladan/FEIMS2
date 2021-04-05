import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import * as io from 'socket.io-client';
import { SocketIOConfig } from './socket.config';

export class Socket {
  protected subscribersCounter: Record<string, number> = {};
  protected eventObservables$: Record<string, Observable<any>> = {};
  protected socket: any;

  constructor(config: SocketIOConfig) {
    this.socket = io.connect(config.url);
  }

  disconnect(close?: any) {
    return this.socket.disconnect(close);
  }

  on(event: string, callback: Function) {
    this.socket.on(event, callback);
  }

  once(eventName: string, callback: Function) {
    this.socket.once(eventName, callback);
  }

  emit(event: string, ...args: any[]) {
    this.socket.emit(event, ...args);
  }

  fromEvent<T>(eventName: string): Observable<T> {
    if (!this.subscribersCounter[eventName]) {
      this.subscribersCounter[eventName] = 0;
    }
    this.subscribersCounter[eventName]++;

    if (!this.eventObservables$[eventName]) {
        this.eventObservables$[eventName] = new Observable((observer: any) => {
            const listener = (data: T) => {
                observer.next(data);
            };
            this.socket.on(eventName, listener);
            return () => {
                this.subscribersCounter[eventName]--;
                if (this.subscribersCounter[eventName] === 0) {
                    this.socket.removeListener(eventName, listener);
                    delete this.eventObservables$[eventName];
                }
            };
        }).pipe(share());
    }
    return this.eventObservables$[eventName];
  }

  fromOneTimeEvent<T>(eventName: string): Promise<T> {
    return new Promise<T>(resolve => this.once(eventName, resolve));
  }
}