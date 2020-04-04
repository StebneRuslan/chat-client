import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestsService } from '../requests/requests.service';
import { SocketsService } from '../sockets/sockets.service';

import { ChatPreviewModel } from '../../models/chat-preview.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private socketsService: SocketsService,
    private api: RequestsService
  ) { }

  // TODO: think about private

  public activeChat: ChatPreviewModel = new ChatPreviewModel();

  public createChat(chatName: string, chatType: string, description: string, users: string[]): Observable<any> {
    return this.api.post({
      url: `/chats`,
      body: {chatName, chatType, description, users}
    });
  }
}
