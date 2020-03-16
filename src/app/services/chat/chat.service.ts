import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  private activeChat = {};

  public setActiveChat({id, type}) {
    this.activeChat = { id, type };
  }

  public getAvtiveChat() {
    return this.activeChat;
  }

}
