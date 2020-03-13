import { Component, OnInit } from '@angular/core';

import { ChatPreviewModel } from './chat-preview/chat-preview.model';
import { chatListMock } from './chat-list.mock';

import { RequestsService } from '../../../services/requests/requests.service';

@Component({
  selector: 'app-chat-lists',
  templateUrl: './chat-lists.component.html',
  styleUrls: ['./chat-lists.component.scss']
})
export class ChatListsComponent implements OnInit {

  public chatLists = chatListMock;
  public filterLists = chatListMock;
  public selectedChatId;
  public searchTimeout = null;

  constructor(private api: RequestsService) { }

  public ngOnInit(): void {
    // this.api.get({url: '/user/chats'})
    //   .then((res) => {
    //     this.chatLists = this.filterLists = res.data;
    //   });
  }

  public search(value: string): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.filterLists = this.chatLists.filter(el => el.name.toLowerCase().startsWith(value.toLowerCase()));
    }, 100);
  }

  public openChat(id: number): void {
    this.selectedChatId = id;
  }

}
