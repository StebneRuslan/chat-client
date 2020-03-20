import { Component, OnInit } from '@angular/core';
import { MessageModel } from './messages-list/message/message.model';
import { MessagesListModel } from './messages-list/messages-list.model';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  public messages: MessageModel[] = new MessagesListModel().messages;
  constructor() { }

  ngOnInit() {
  }

  public selectMessage(messageId: string): void {
    console.log('Selected users', this.messages.filter(message => message.id === messageId));
  }
}
