import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestsService } from '../requests/requests.service';

import { ChatTypes } from '../interfaces/chat-types.interfaces';
import { ChatPreviewModel } from '../../models/chat-preview.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private api: RequestsService) { }

  // TODO: think about private

  public activeChat: ChatPreviewModel = new ChatPreviewModel();

  public addMembers(users: string[]): Observable<any> {
    return this.api.post({
      url: `/chats/${this.activeChat._id}/add-members`,
      body: { users }
    });
  }

  public createChat(chatName: string, chatType: string, description: string, users: string[]): Observable<any> {
    return this.api.post({
      url: `/chats`,
      body: {chatName, chatType, description, users}
    });
  }
}
