import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

import { environment } from '../../../environments/environment';
import { SocketMessageModel } from '../../models/socket.message.model';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  private socket;

  constructor() { }

  public initSocket(userId: string): void {
    this.socket = io(`${environment.api}?userId=${userId}`, { transports: ['websocket'] });
  }

  public send(message: SocketMessageModel) {
    this.socket.emit(message.action, message.data);
  }

  public onMessage(message: string): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(message, (data: any) => observer.next(data));
    });
  }
}
