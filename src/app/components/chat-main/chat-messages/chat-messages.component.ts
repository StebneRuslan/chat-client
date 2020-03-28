import { Component, OnDestroy, OnInit } from '@angular/core';

import { BusService } from '../../../services/bus/bus.service';

import { MessageModel } from './messages-list/message/message.model';
import { MessagesListModel } from './messages-list/messages-list.model';
import { CREATE_NEW_DIALOG } from '../../../actions/main.action';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.template.html',
  styleUrls: ['./chat-messages.style.scss']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {
  public selectedMessages = [];
  public messages: MessageModel[] = new MessagesListModel().messages;

  constructor(
    private bus: BusService,
    private chatService: ChatService
  ) { }

  public ngOnInit(): void {
    this.bus.subscribe(CREATE_NEW_DIALOG, this.getChatData, this);
  }

  public getChatData(chat: any) {
    console.log('getChatData', chat);
  }

  public selectMessage(messageId: string): void {
    const selectedMessage = this.messages.find(message => message.id === messageId);
    selectedMessage.selected = !selectedMessage.selected;
    this.selectedMessages = this.messages.filter(message => message.selected);
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(CREATE_NEW_DIALOG, this.getChatData);
  }
}
