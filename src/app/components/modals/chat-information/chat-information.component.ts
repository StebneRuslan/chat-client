import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RequestsService } from '../../../services/requests/requests.service';
import { ChatService } from '../../../services/chat/chat.service';
import { BusService } from '../../../services/bus/bus.service';
import { SocketsService } from '../../../services/sockets/sockets.service';

import { ChatInformationModel } from '../../../models/chat-information.model';
import { UPDATE_CHAT_INFO } from '../../../actions/main.action';
import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';

@Component({
  selector: 'app-chat-information',
  templateUrl: './chat-information.template.html',
  styleUrls: ['./chat-information.style.scss']
})
export class ChatInformationComponent implements OnInit, OnDestroy {

  public chatTypes = ChatTypes;
  public chatName = '';
  public channelDescription = '';
  public chatUsers;
  public image = '';

  constructor(
    private api: RequestsService,
    private chatService: ChatService,
    private bus: BusService,
    private socketsService: SocketsService,
    public dialogRef: MatDialogRef<ChatInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChatInformationModel
  ) {}

  public ngOnInit(): void {
    this.socketsService.onMessage('notify-add-members')
      .subscribe(users => {
        this.chatUsers = this.chatUsers.concat(users);
      });
    this.socketsService.onMessage('notify-remove-members')
      .subscribe(res => {
        this.chatUsers.forEach((user, index) => {
          if (user._id === res.userId && this.chatService.activeChat._id === res.chatId) {
            this.chatUsers.splice(index, 1);
          }
        });
      });
    this.bus.subscribe(UPDATE_CHAT_INFO, this.changeChatInfo, this);
    const url = (this.data.type === this.chatTypes.PROFILE || this.data.type === this.chatTypes.DIALOG)
      ? `/users/${this.data.chatId}` : `/chats/${this.data.chatId}`;

    this.api.get({ url })
      .subscribe(
        res => {
          this.image = (res.avatar && res.avatar.url) ? res.avatar.url : '';
          this.chatName = res.username || res.chatName;
          this.channelDescription = res.description || '';
          this.chatUsers = res.users;
        },
        err => console.log('error', err));
  }

  public changeChatInfo(data: any): void {
    this.chatName = data.name;
    this.channelDescription = data.description;
  }

  public closeModel(): void {
    this.dialogRef.close();
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(UPDATE_CHAT_INFO, this.changeChatInfo);
  }

}
