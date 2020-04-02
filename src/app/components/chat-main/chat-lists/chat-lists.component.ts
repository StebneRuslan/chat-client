import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChatPreviewModel } from '../../../models/chat-preview.model';
import { CREATE_NEW_DIALOG, SELECT_CHAT, OPEN_CHAT, UPDATE_CHAT_MESSAGE } from '../../../actions/main.action';
import { MessageModel } from '../../../models/message.model';

import { RequestsService } from '../../../services/requests/requests.service';
import { BusService } from '../../../services/bus/bus.service';
import { ChatService } from '../../../services/chat/chat.service';
import { AuthService } from '../../../services/auth/auth.service';

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
    private authService: AuthService,
  ) {}

  public ngOnInit(): void {

    this.bus.subscribe(CREATE_NEW_DIALOG, this.addChatToList, this);
    this.bus.subscribe(OPEN_CHAT, this.openChat, this);
    this.bus.subscribe(UPDATE_CHAT_MESSAGE, this.updateChatMessage, this);

    this.activeUser = this.authService.userData.id;
    this.api.get({url: '/chats'})
      .subscribe(res => {
        this.chatLists = [...res];
        this.filterLists = [...res];
      });
  }

  public updateChatMessage(message: MessageModel) {
    const chatIndex = this.chatLists.findIndex(chat => chat._id === message.chatId);
    const chat = this.chatLists.splice(chatIndex, 1)[0];
    chat.lastMessage = this.normalizeMessage(message);
    this.chatLists.unshift(chat);
    this.filterLists = [...this.chatLists];
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

  public addChatToList(chat: any): void {
    this.filterLists.unshift(chat);
    this.chatService.activeChat = chat;
    this.selectedChatId = chat._id;
    this.bus.publish(SELECT_CHAT, {id: chat._id, updateChatInfo: false});
  }

  public openChat(chatId: string): void {
    this.selectedChatId = chatId;
    this.bus.publish(SELECT_CHAT, {chatId, updateChatInfo: true});
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(UPDATE_CHAT_MESSAGE, this.updateChatMessage)
    this.bus.unsubscribe(CREATE_NEW_DIALOG, this.addChatToList);
    this.bus.unsubscribe(OPEN_CHAT, this.openChat);
  }
}
