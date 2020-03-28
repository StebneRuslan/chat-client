import { Component, OnDestroy, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

import { BusService } from '../../../services/bus/bus.service';

import { MessageModel } from './messages-list/message/message.model';
import { SELECT_CHAT } from '../../../actions/main.action';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.template.html',
  styleUrls: ['./chat-messages.style.scss']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {

  private socket;
  public selectedMessages = [];
  public messages: MessageModel[] = [];

  constructor(private bus: BusService) {
    this.socket = io(environment.api);
  }

  public ngOnInit(): void {
    this.bus.subscribe(SELECT_CHAT, this.getChatData, this);
    this.socket.on('notifyMessage', message => {
      message.selected = message.user.selected = false;
      this.messages.unshift(message);
    });
  }

  public getChatData(chatId: string) {
    console.log('getChatData', chatId);
  }

  public selectMessage(messageId: string): void {
    const selectedMessage = this.messages.find(message => message._id === messageId);
    selectedMessage.selected = !selectedMessage.selected;
    this.selectedMessages = this.messages.filter(message => message.selected);
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(SELECT_CHAT, this.getChatData);
  }
}
