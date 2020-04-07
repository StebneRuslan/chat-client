import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestsService } from '../requests/requests.service';
import { SocketsService } from '../sockets/sockets.service';

import { ChatPreviewModel } from '../../models/chat-preview.model';
import { ScrollModel } from '../../components/chat-main/chat-messages/scroll.model';
import { MessageModel } from '../../models/message.model';

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

  public setActiveChat(chat?) {
    if (chat) {
      this.activeChat = chat;
      this.activeChat.users = this.activeChat.users.length;
    } else {
      this.activeChat = new ChatPreviewModel();
    }
  }

  public updateScrollConfig(oldConfig: ScrollModel, messages: MessageModel[]): ScrollModel {
    return new ScrollModel((messages && messages.length) ? messages[messages.length - 1].date : oldConfig.dateOfLast);
  }

  public createChat(chatName: string, chatType: string, description: string, users: string[]): Observable<any> {
    return this.api.post({
      url: `/chats`,
      body: {chatName, chatType, description, users}
    });
  }
}
