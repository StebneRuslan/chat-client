import { Component, OnDestroy, OnInit } from '@angular/core';

import { BusService } from '../../../services/bus/bus.service';

import { MessageModel } from './messages-list/message/message.model';
import { MessagesListModel } from './messages-list/messages-list.model';
import { SELECT_CHAT } from '../../../actions/main.action';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {

  public messages: MessageModel[] = new MessagesListModel().messages;

  constructor(private bus: BusService) { }

  public ngOnInit(): void {
    this.bus.subscribe(SELECT_CHAT, this.getChatData, this);
  }

  public getChatData(chatId: string) {
    console.log('getChatData', chatId);
  }

  public selectMessage(messageId: string): void {
    console.log('Selected users', this.messages.filter(message => message.id === messageId));
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(SELECT_CHAT, this.getChatData);
  }
}
