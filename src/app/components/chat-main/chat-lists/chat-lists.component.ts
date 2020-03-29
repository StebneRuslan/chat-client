import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChatPreviewModel } from '../../../models/chat-preview.model';
import { CREATE_NEW_DIALOG, SELECT_CHAT, OPEN_CHAT } from '../../../actions/main.action';

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
    private authService: AuthService
  ) { }

  public ngOnInit(): void {

    this.bus.subscribe(CREATE_NEW_DIALOG, this.addChatToList, this);
    this.bus.subscribe(OPEN_CHAT, this.openChat, this);

    this.activeUser = this.authService.userData.id;
    // TODO: event or smth else (app component can't set userData on time)
    setTimeout(() => {
      this.api.get({url: '/chats'})
        .subscribe(res => {
          this.chatLists = [...res];
          this.filterLists = [...res];
        });
    }, 1000);
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
    this.bus.unsubscribe(CREATE_NEW_DIALOG, this.addChatToList);
    this.bus.unsubscribe(OPEN_CHAT, this.openChat);
  }
}
