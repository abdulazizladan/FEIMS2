import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from './socket.service';
import { SocketIOConfig } from './socket.config';
import { Socket } from './socket';

@NgModule({})
export class SocketModule {
  static forRoot(config: SocketIOConfig): ModuleWithProviders<SocketModule> {
    return ({
      ngModule: SocketModule,
      providers: [
        {
          provide: SocketService,
          useValue: new Socket(config)
        }
      ]
    });
  }
}
