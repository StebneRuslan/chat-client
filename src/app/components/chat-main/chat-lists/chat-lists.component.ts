import { Component, OnInit } from '@angular/core';

import { ChatPreviewModel } from './chat-preview/chat-preview.model';
import { chatListMock } from './chat-list.mock';
import { SELECT_CHAT } from '../../../actions/main.action';

import { RequestsService } from '../../../services/requests/requests.service';
import { BusService } from '../../../services/bus/bus.service';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'app-chat-lists',
  templateUrl: './chat-lists.component.html',
  styleUrls: ['./chat-lists.component.scss']
})
export class ChatListsComponent implements OnInit {

  public chatLists: ChatPreviewModel[] = chatListMock;
  public filterLists: ChatPreviewModel[] = this.chatLists;
  public selectedChatId;

  constructor(
    private api: RequestsService,
    private bus: BusService,
    private chatService: ChatService
  ) { }

  public ngOnInit(): void {
    // this.api.get({url: '/user/chats'})
    //   .then((res) => {
    //     this.chatLists = this.filterLists = res.data;
    //   });
  }

  public openChat(id: number): void {
    this.selectedChatId = id;
    this.chatService.setActiveChat({id, type: 'type'});
    this.bus.publish(SELECT_CHAT, id);
  }

}
