import {Component, OnInit, OnDestroy } from '@angular/core';

import { ChatPreviewModel } from './chat-preview/chat-preview.model';
import { chatListMock } from './chat-list.mock';
import { CREATE_NEW_DIALOG, SELECT_CHAT } from '../../../actions/main.action';

import { RequestsService } from '../../../services/requests/requests.service';
import { BusService } from '../../../services/bus/bus.service';
import { ChatService } from '../../../services/chat/chat.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-chat-lists',
  templateUrl: './chat-lists.template.html',
  styleUrls: ['./chat-lists.style.scss']
})
export class ChatListsComponent implements OnInit, OnDestroy {
  public activeUser = null;
  public chatLists: ChatPreviewModel[] = chatListMock;
  public filterLists: ChatPreviewModel[] = this.chatLists;
  public selectedChatId;

  constructor(
    private api: RequestsService,
    private bus: BusService,
    private chatService: ChatService,
    private userService: AuthService
  ) { }

  public ngOnInit(): void {
    this.bus.subscribe(SELECT_CHAT, this.openChat, this);
    this.bus.subscribe(CREATE_NEW_DIALOG, this.addChatToList, this);
    this.activeUser = this.userService.getUserId();
    this.api.get({url: '/chats'})
      .subscribe((res) => {
        this.chatLists = this.filterLists = res;
      });
  }

  public addChatToList(chat: any): void {
    this.filterLists.unshift(chat);
  }

  public openChat(chat: any): void {
    this.selectedChatId = chat._id;
    this.chatService.setActiveChat(chat);
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(CREATE_NEW_DIALOG, this.addChatToList);
    this.bus.unsubscribe(SELECT_CHAT, this.openChat);
  }
}
