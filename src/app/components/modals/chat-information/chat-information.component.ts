import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RequestsService } from '../../../services/requests/requests.service';
import { ChatService } from '../../../services/chat/chat.service';
import { BusService } from '../../../services/bus/bus.service';
import { SocketsService } from '../../../services/sockets/sockets.service';
import { AuthService } from '../../../services/auth/auth.service';

import { ChatInformationModel } from '../../../models/chat-information.model';
import { UPDATE_CHAT_INFO, CLOSE_CHAT_SETTINGS_MODAL } from '../../../actions/main.action';
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
    private authService: AuthService,
    private bus: BusService,
    private socketsService: SocketsService,
    public dialogRef: MatDialogRef<ChatInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChatInformationModel
  ) {}

  public ngOnInit(): void {

    this.getChatInformation();

    this.socketsService.onMessage('notify-add-members')
      .subscribe(users => this.chatUsers = this.chatUsers.concat(users));

    this.socketsService.onMessage('notify-remove-members')
      .subscribe(res => this.removeMembers(res));

    this.bus.subscribe(UPDATE_CHAT_INFO, this.changeChatInfo, this);
    this.bus.subscribe(CLOSE_CHAT_SETTINGS_MODAL, this.closeModel, this);
  }

  public getChatInformation() {
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

  public removeMembers(res) {
    if (this.authService.userData.id !== res.userId) {
      const userIndex = this.chatUsers.findIndex(user => user._id === res.userId && this.chatService.activeChat._id === res.chatId);
      if (userIndex > -1) {
        this.chatUsers.splice(userIndex, 1);
      }
    }
  }

  public changeChatInfo(data: any): void {
    this.chatName = data.name;
    this.channelDescription = data.description;
  }

  public closeModel(): void {
    this.dialogRef.close();
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(CLOSE_CHAT_SETTINGS_MODAL, this.closeModel);
    this.bus.unsubscribe(UPDATE_CHAT_INFO, this.changeChatInfo);
  }

}
