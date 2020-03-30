import { Component, OnDestroy, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

import { BusService } from '../../../services/bus/bus.service';
import { ChatService } from '../../../services/chat/chat.service';
import { RequestsService } from '../../../services/requests/requests.service';

import { MessageModel } from '../../../models/message.model';
import { SELECT_CHAT, CLEAR_SELECT_MESSAGE } from '../../../actions/main.action';
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

  constructor(
    private api: RequestsService,
    private bus: BusService,
    private chatService: ChatService
  ) {
    this.socket = io(environment.api);
  }

  public ngOnInit(): void {
    this.bus.subscribe(CLEAR_SELECT_MESSAGE, this.clearSelectMessage, this);
    this.bus.subscribe(SELECT_CHAT, this.getChatData, this);

    this.socket.on('notifyMessage', message => {
      this.messages.unshift(message);
    });
    this.socket.on('notifyDeleteMessage', messages => {
      this.messages = this.messages.filter(el => !messages.includes(el._id));
      this.selectedMessages = [];
    });
  }

  public getChatData(data): void {
    if (data.updateChatInfo) {
      this.api.get({url: `/chats/${data.chatId}`})
        .subscribe(res => this.chatService.activeChat = res);

      this.api.get({url: `/messages/${data.chatId}`})
        .subscribe(res => {
          // TODO: get messages by chunk, sorting by date
          this.messages = res.sort((prev, next) => +new Date(next.date) - +new Date(prev.date));
          this.selectedMessages = [];
        });
    } else {
      this.messages = [];
      this.selectedMessages = [];
    }
  }

  public selectMessage(messageId: string): void {
    const selectedMessage = this.messages.find(message => message._id === messageId);
    selectedMessage.selected = !selectedMessage.selected;
    this.selectedMessages = this.messages.filter(message => message.selected);
  }

  public clearSelectMessage(): void {
    this.messages.forEach(el => el.selected = false);
    this.selectedMessages = [];
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(SELECT_CHAT, this.getChatData);
    this.bus.unsubscribe(CLEAR_SELECT_MESSAGE, this.clearSelectMessage);
  }
}
