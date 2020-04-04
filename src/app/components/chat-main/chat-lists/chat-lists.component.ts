import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChatPreviewModel } from '../../../models/chat-preview.model';
import { SELECT_CHAT, OPEN_CHAT, UPDATE_CHAT_MESSAGE, CLOSE_CHAT_SETTINGS_MODAL } from '../../../actions/main.action';
import { MessageModel } from '../../../models/message.model';

import { RequestsService } from '../../../services/requests/requests.service';
import { BusService } from '../../../services/bus/bus.service';
import { ChatService } from '../../../services/chat/chat.service';
import { AuthService } from '../../../services/auth/auth.service';
import { SocketsService } from '../../../services/sockets/sockets.service';

@Component({
  selector: 'app-chat-lists',
  templateUrl: './chat-lists.template.html',
  styleUrls: ['./chat-lists.style.scss']
})
export class ChatListsComponent implements OnInit, OnDestroy {

  public activeUser = null;
  public chatLists: ChatPreviewModel[] = [];
  public filterLists: ChatPreviewModel[] = [];
  public selectedChatId;

  constructor(
    private api: RequestsService,
    private bus: BusService,
    private chatService: ChatService,
    private socketsService: SocketsService,
    private authService: AuthService,
  ) {}

  public ngOnInit(): void {

    this.activeUser = this.authService.userData.id;
    this.api.get({url: '/chats'})
      .subscribe(res => {
        this.chatLists = [...res];
        this.filterLists = [...res];
      });

    this.socketsService.onMessage('notify-add-chat')
      .subscribe(res => this.addChatToList(res.chat));

    this.socketsService.onMessage('notify-remove-members')
      .subscribe(res => this.removeMembers(res));

    this.bus.subscribe(OPEN_CHAT, this.openChat, this);
    this.bus.subscribe(UPDATE_CHAT_MESSAGE, this.updateChatMessage, this);

  }

  public removeMembers(res) {
    if (this.activeUser === res.userId) {
      const chatListIndex = this.chatLists.findIndex(chat => chat._id === res.chatId);
      const filterListsIndex = this.filterLists.findIndex(chat => chat._id === res.chatId);
      if (chatListIndex > -1) {
        this.chatLists.splice(chatListIndex, 1);
      }
      if (filterListsIndex > -1) {
        this.filterLists.splice(filterListsIndex, 1);
      }
      // show 'Select chat...' screen
      if (this.chatService.activeChat._id === res.chatId) {
        this.chatService.activeChat = null;
      }

      // close settings modal
      if (res.isDelete) {
        this.bus.publish(CLOSE_CHAT_SETTINGS_MODAL);
      }
    }
  }

  public updateChatMessage(message: MessageModel) {
    const chatIndex = this.chatLists.findIndex(chat => chat._id === message.chatId);
    const chat = this.chatLists.splice(chatIndex, 1)[0];
    chat.lastMessage = this.normalizeMessage(message);
    this.chatLists.unshift(chat);
    // TODO: filterLists
    this.filterLists = [...this.chatLists];
  }

  public addChatToList(chat: any): void {
    // TODO: filterLists
    this.chatLists.unshift(chat);
    this.filterLists.unshift(chat);
    this.chatService.activeChat = chat;
    this.selectedChatId = chat._id;
    this.bus.publish(SELECT_CHAT, {id: chat._id, updateChatInfo: false});
  }

  public openChat(chatId: string): void {
    this.selectedChatId = chatId;
    this.bus.publish(SELECT_CHAT, {chatId, updateChatInfo: true});
  }

  public normalizeMessage(message: MessageModel): any {
    return  {
      _id: message._id,
      chatId: message.chatId,
      message: message.message,
      createdAt: message.date,
      authorId: {
        _id: message.user._id,
        username: message.user.username
      }
    };
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(UPDATE_CHAT_MESSAGE, this.updateChatMessage)
    this.bus.unsubscribe(OPEN_CHAT, this.openChat);
  }
}
