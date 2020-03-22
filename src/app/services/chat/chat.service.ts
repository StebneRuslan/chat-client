import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  private activeChat = {
    id: '1',
    type: 'contact',
    role: 'admin',
    name: 'Chat name'
  };

  private selectedChat = {
    id: '',
    type: ''
  };

  public setActiveChat({id, type, role, name}) {
    this.activeChat = { id, type, role, name };
  }

  public getActiveChat() {
    return this.activeChat;
  }

  public setSelectedChat({id, type}) {
    this.selectedChat = { id, type};
  }

  public getSelectedChat() {
    return this.selectedChat;
  }

}
