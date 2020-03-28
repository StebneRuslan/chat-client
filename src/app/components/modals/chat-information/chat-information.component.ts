import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RequestsService } from '../../../services/requests/requests.service';
import { ChatService } from '../../../services/chat/chat.service';
import { BusService } from '../../../services/bus/bus.service';

import { ChatInformationModel } from './chat-information.model';
import { CHAT_TYPES, UPDATE_CHAT_INFO } from '../../../actions/main.action';

@Component({
  selector: 'app-chat-information',
  templateUrl: './chat-information.template.html',
  styleUrls: ['./chat-information.style.scss']
})
export class ChatInformationComponent implements OnInit, OnDestroy {

  public chatTypes = CHAT_TYPES;
  public chatName = 'Test';
  public image = '';

  constructor(
    private api: RequestsService,
    private chatService: ChatService,
    private bus: BusService,
    public dialogRef: MatDialogRef<ChatInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChatInformationModel
  ) {}

  public ngOnInit(): void {
    const url = this.data.type === this.chatTypes.profile ? `/users/${this.data.chatId}` : `/chats/${this.data.chatId}`;
    // TODO: do request for other chat data
    if (this.data.type === this.chatTypes.profile) {
      this.api.get({ url })
        .subscribe(res => {
          this.image = res.avatar ? res.avatar.url : '';
          this.chatName = res.username;
        });
    }
    this.bus.subscribe(UPDATE_CHAT_INFO, this.changeChatInfo, this);
  }

  public changeChatInfo(data: any): void {
    this.chatName = data.name;
  }

  public closeModel(): void {
    this.dialogRef.close();
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(UPDATE_CHAT_INFO, this.changeChatInfo);
  }

}
