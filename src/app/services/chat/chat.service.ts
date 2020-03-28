import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestsService } from '../requests/requests.service';

import { ChatTypes } from '../interfaces/chat-types.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private api: RequestsService) { }

  private activeChat = {
    _id: '1',
    type: 'contact',
    role: 'admin',
    name: 'Chat name',
    chatName: ''
  };

  public setActiveChat(chat) {
    this.activeChat = chat;
  }

  public getActiveChat() {
    return this.activeChat;
  }

  public addMembers(users: string[]): Observable<any> {
    return this.api.post({
      url: `/chats/${this.activeChat._id}/add-members`,
      body: { users }
    });
  }

  public createChat(title: string, type: string, description: string, users: string[]): Observable<any> {
    return this.api.post({
      url: `/chats`,
      body: {chatName: title, chatType: type, users}
    });
  }
}
