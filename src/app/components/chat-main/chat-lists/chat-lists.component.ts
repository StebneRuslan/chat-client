import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChatPreviewModel } from '../../../models/chat-preview.model';
import { SELECT_CHAT, OPEN_CHAT, UPDATE_CHAT_MESSAGE, CLOSE_CHAT_SETTINGS_MODAL, ADD_NEW_CHAT } from '../../../actions/main.action';
import { MessageModel } from '../../../models/message.model';

import { RequestsService } from '../../../services/requests/requests.service';
import { BusService } from '../../../services/bus/bus.service';
import { ChatService } from '../../../services/chat/chat.service';
import { AuthService } from '../../../services/auth/auth.service';
import { SocketsService } from '../../../services/sockets/sockets.service';
import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';

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
    private authService: AuthService
  ) {}

  public ngOnInit(): void {

    this.activeUser = this.authService.userData.id;
    this.api.get({url: '/chats'})
      .subscribe(res => {
        this.chatLists = [...res];
        this.filterLists = [...res];
      });

    this.socketsService.onMessage('notify-add-chat')
      .subscribe(res => this.addChatToList(res));

    this.socketsService.onMessage('notify-remove-members')
      .subscribe(res => this.removeMembers(res));

    this.socketsService.onMessage('notify-delete-chat')
      .subscribe(res => this.removeMembers(res, true));

    this.socketsService.onMessage('notify-update-chat')
      .subscribe(res => this.updateChatInfo(res));

    this.socketsService.onMessage('notify-update-avatar')
      .subscribe(res => this.updateAvatar(res));

    this.bus.subscribe(OPEN_CHAT, this.openChat, this);
    this.bus.subscribe(UPDATE_CHAT_MESSAGE, this.updateChatMessage, this);
    this.bus.subscribe(ADD_NEW_CHAT, this.addNewChat, this);
  }

  public removeMembers(data: any, isDelete?): void {
    if (this.activeUser === data.userId || isDelete) {
      this.chatLists = this.chatLists.filter(chat => chat._id !== data.chatId);
      this.filterLists = this.filterLists.filter(chat => chat._id !== data.chatId);
      // show 'Select chat...' screen and  close settings modal
      if (this.chatService.activeChat._id === data.chatId) {
        this.chatService.setActiveChat();
        this.bus.publish(CLOSE_CHAT_SETTINGS_MODAL);
      }
    }
  }

  // TODO: optimization updating function to one
  public updateChatInfo(data): void {
    if (data.chatId === this.chatService.activeChat._id) {
      this.chatService.activeChat.chatName = data.chatData.chatName;
      this.chatService.activeChat.description = data.chatData.description;
    }
    const chatIndex = this.chatLists.findIndex(chat => chat._id === data.chatId);
    this.chatLists[chatIndex].chatName =  data.chatData.chatName;
    this.chatLists[chatIndex].description =  data.chatData.description;
    // TODO: filterLists
    this.filterLists = [...this.chatLists];
  }

  public updateAvatar(data: any): void {
    if (data.chatId === this.chatService.activeChat._id) {
      this.chatService.activeChat.avatar = { url: data.url} ;
    }
    const chatIndex = this.chatLists.findIndex(chat => chat._id === data.chatId);
    this.chatLists[chatIndex].avatar = { url: data.url };
    // TODO: filterLists
    this.filterLists = [...this.chatLists];
  }

  public updateChatMessage(message: MessageModel): void {
    const chatIndex = this.chatLists.findIndex(chat => chat._id === message.chatId);
    const chat = this.chatLists.splice(chatIndex, 1)[0];
    chat.lastMessage = this.normalizeMessage(message);
    this.chatLists.unshift(chat);
    // TODO: filterLists
    this.filterLists = [...this.chatLists];
  }

  // for author of new chat
  public addNewChat(chat) {
    this.chatService.setActiveChat(chat);
    this.selectedChatId = chat._id;
    this.bus.publish(SELECT_CHAT, {chatId: chat._id, updateChatInfo: true});
  }

  // for all members in new chat
  public addChatToList(chat: ChatPreviewModel): void {
    // TODO: filterLists
    this.chatLists.unshift(chat);
    this.filterLists.unshift(chat);
  }

  public openChat(data): void {
    if (data.isDialog) {
      const dialog = this.chatLists.find(chat => chat.recipientId === data.chatId);
      if (dialog) {
        data.chatId = dialog._id;
      } else {
        this.chatService.createChat('', ChatTypes.DIALOG, '', [data.chatId])
          .subscribe((res) => this.addNewChat(res.chat));
        return;
      }
    }
    this.selectedChatId = data.chatId;
    this.bus.publish(SELECT_CHAT, {chatId: data.chatId, updateChatInfo: true});
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
    this.bus.unsubscribe(ADD_NEW_CHAT, this.addNewChat);
    this.bus.unsubscribe(UPDATE_CHAT_MESSAGE, this.updateChatMessage);
    this.bus.unsubscribe(OPEN_CHAT, this.openChat);
  }
}
