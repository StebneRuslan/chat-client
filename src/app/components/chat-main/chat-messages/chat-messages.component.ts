import { Component, OnDestroy, OnInit } from '@angular/core';

import { BusService } from '../../../services/bus/bus.service';
import { ChatService } from '../../../services/chat/chat.service';
import { RequestsService } from '../../../services/requests/requests.service';
import { AuthService } from '../../../services/auth/auth.service';
import { SocketsService } from '../../../services/sockets/sockets.service';

import { MessageModel } from '../../../models/message.model';
import { ScrollModel } from './scroll.model';
import {
  SELECT_CHAT,
  CLEAR_SELECT_MESSAGE,
  UPDATE_CHAT_MESSAGE,
  UPDATE_MEMBERS,
  SCROLL_DOWN
} from '../../../actions/main.action';

import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.template.html',
  styleUrls: ['./chat-messages.style.scss']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {
  public selectedMessages = [];
  public messages: MessageModel[] = [];
  public showEditor = true;
  private container: HTMLElement;
  private scrollConfig: ScrollModel;

  constructor(
    private api: RequestsService,
    private bus: BusService,
    private chatService: ChatService,
    private authService: AuthService,
    private socketsService: SocketsService
  ) {
    this.scrollConfig = new ScrollModel();
  }

  public ngOnInit(): void {
    this.bus.subscribe(CLEAR_SELECT_MESSAGE, this.clearSelectMessage, this);
    this.bus.subscribe(SELECT_CHAT, this.getChatData, this);
    this.bus.subscribe(SCROLL_DOWN, this.scrollDown, this);

    this.socketsService.onMessage('notify-message')
      .subscribe(message => this.notifyMessages(message));

    this.socketsService.onMessage('notify-delete-message')
      .subscribe(res => this.notifyDeleteMessages(res));

    this.socketsService.onMessage('notify-add-members')
      .subscribe(res => this.addMembers(res));

    this.socketsService.onMessage('notify-remove-members')
      .subscribe(res => this.removeMembers(res));
  }

  private scrollDown(): void {
    if (!this.container) {
      this.container = document.getElementById('msgContainer');
    }
    if (this.container) {
      this.container.scrollTop = this.container.scrollHeight;
    }
  }

  public getChatData(data): void {
    this.scrollConfig = new ScrollModel();
    if (data.updateChatInfo) {
      this.api.get({url: `/chats/${data.chatId}`})
        .subscribe(chat => {
          this.chatService.setActiveChat(chat);
          this.setShowEditorSettings();
        });
      this.api.get({url: `/messages/${data.chatId}?lastMessageDate=${this.scrollConfig.lastMessageDate}`})
        .subscribe(res => {
          this.messages = res;
          this.scrollConfig = this.chatService.updateScrollConfig(this.scrollConfig, res);
          setTimeout(() => this.scrollDown(), 0);
          this.selectedMessages = [];
        });
    } else {
      this.messages = [];
      this.selectedMessages = [];
      this.setShowEditorSettings();
    }
  }

  public getMessages() {
    this.api.get({url: `/messages/${this.chatService.activeChat._id}?lastMessageDate=${this.scrollConfig.lastMessageDate}`})
      .subscribe(res => {
        this.messages = this.messages.concat(res);
        this.scrollConfig = this.chatService.updateScrollConfig(this.scrollConfig, res);
      });
  }

  public notifyMessages(message: any): void {
    if (message.chatId === this.chatService.activeChat._id) {
      this.messages.unshift(message);
    }
    this.bus.publish(UPDATE_CHAT_MESSAGE, message);
  }

  public notifyDeleteMessages(data: any): void {
    // TODO: update last message if it was deleted and sort by it
    if (data.chatId === this.chatService.activeChat._id) {
      this.messages = this.messages.filter(el => !data.messages.includes(el._id));
      this.selectedMessages = [];
    }
  }

  public setShowEditorSettings(): void {
    this.showEditor = !(this.chatService.activeChat.chatType === ChatTypes.CHANNEL &&
      !this.chatService.activeChat.admins.includes(this.authService.userData.id));
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

  public addMembers(data: any): void {
    if (this.chatService.activeChat._id === data.chatId) {
      this.bus.publish(UPDATE_MEMBERS, {action: 'add', users: data.users});
      data.users.forEach(() => this.chatService.activeChat.users += 1);
    }
  }

  public removeMembers(data: any): void {
    if (this.authService.userData.id !== data.userId && this.chatService.activeChat._id === data.chatId) {
      this.bus.publish(UPDATE_MEMBERS, {action: 'delete', userId: data.userId});
      this.chatService.activeChat.users -= 1;
    }
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(SELECT_CHAT, this.getChatData);
    this.bus.unsubscribe(SCROLL_DOWN, this.scrollDown);
    this.bus.unsubscribe(CLEAR_SELECT_MESSAGE, this.clearSelectMessage);
  }
}
