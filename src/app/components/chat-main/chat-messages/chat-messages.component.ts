import { Component, OnDestroy, OnInit } from '@angular/core';

import { BusService } from '../../../services/bus/bus.service';
import { ChatService } from '../../../services/chat/chat.service';
import { RequestsService } from '../../../services/requests/requests.service';
import { AuthService } from '../../../services/auth/auth.service';
import { SocketsService } from '../../../services/sockets/sockets.service';

import { MessageModel } from '../../../models/message.model';
import { SELECT_CHAT, CLEAR_SELECT_MESSAGE, UPDATE_CHAT_MESSAGE, UPDATE_MEMBERS } from '../../../actions/main.action';

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

  constructor(
    private api: RequestsService,
    private bus: BusService,
    private chatService: ChatService,
    private authService: AuthService,
    private socketsService: SocketsService
  ) {}

  public ngOnInit(): void {
    this.bus.subscribe(CLEAR_SELECT_MESSAGE, this.clearSelectMessage, this);
    this.bus.subscribe(SELECT_CHAT, this.getChatData, this);

    this.socketsService.onMessage('notify-message')
      .subscribe(message => this.notifyMessages(message));

    this.socketsService.onMessage('notify-delete-message')
      .subscribe(messages => this.notifyDeleteMessages(messages));

    this.socketsService.onMessage('notify-add-members')
      .subscribe(res => this.addMembers(res));

    this.socketsService.onMessage('notify-remove-members')
      .subscribe(res => this.removeMembers(res));
  }

  public getChatData(data): void {
    if (data.updateChatInfo) {
      this.api.get({url: `/chats/${data.chatId}`})
        .subscribe(chat => {
          this.chatService.activeChat = chat;
          this.setShowEditorSettings();
        });

      this.api.get({url: `/messages/${data.chatId}`})
        .subscribe(res => {
          // TODO: get messages by chunk, sorting by date
          this.messages = res;
          this.selectedMessages = [];
        });
    } else {
      this.messages = [];
      this.selectedMessages = [];
      this.setShowEditorSettings();
    }
  }

  public getMessages() {
    this.api.get({url: `/messages/${this.chatService.activeChat._id}?lastMessage=${this.messages[this.messages.length - 1]._id}`})
      .subscribe(res => {
        this.messages = res;
      });
  }

  public notifyMessages(message): void {
    if (message.chatId === this.chatService.activeChat._id) {
      this.messages.unshift(message);
    }
    this.bus.publish(UPDATE_CHAT_MESSAGE, message);
  }

  public notifyDeleteMessages(messages): void {
    this.messages = this.messages.filter(el => !messages.includes(el._id));
    this.selectedMessages = [];
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

  public addMembers(data): void {
    if (this.chatService.activeChat._id === data.chatId) {
      this.bus.publish(UPDATE_MEMBERS, {action: 'add', users: data.users});
      data.users.forEach(user => this.chatService.activeChat.users.push(user._id));
    }
  }

  public removeMembers(data): void {
    if (this.authService.userData.id !== data.userId && this.chatService.activeChat._id === data.chatId) {
      this.bus.publish(UPDATE_MEMBERS, {action: 'delete', userId: data.userId});
      // TODO: delete from activeChat.users, when normalize users to string
    }
  }

  public ngOnDestroy(): void {
    // this.socket.off('notifyMessage');
    // this.socket.off('notifyDeleteMessage');
    this.bus.unsubscribe(SELECT_CHAT, this.getChatData);
    this.bus.unsubscribe(CLEAR_SELECT_MESSAGE, this.clearSelectMessage);
  }
}
