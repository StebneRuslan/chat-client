import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ChatInformationComponent } from '../modals/chat-information/chat-information.component';

import { ChatService } from '../../services/chat/chat.service';
import { AuthService } from '../../services/auth/auth.service';

import { ChatInformationModel } from '../../models/chat-information.model';
import { ChatTypes } from '../../services/interfaces/chat-types.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
  styleUrls: ['./header.style.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public activeChat;

  constructor(
    public dialog: MatDialog,
    private chatService: ChatService,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {}


  public openChatSetting(): void {
    this.dialog.open(ChatInformationComponent, {
      width: '450px',
      data: new ChatInformationModel(
        this.chatService.activeChat.chatType,

        this.chatService.activeChat.chatType === ChatTypes.PROFILE
        || (this.chatService.activeChat.admins.includes(this.authService.userData.id)
        && this.chatService.activeChat.chatType !== ChatTypes.DIALOG),

        this.chatService.activeChat.chatType === ChatTypes.DIALOG
          ? this.chatService.activeChat.recipientId
          : this.chatService.activeChat._id
      )
    });
  }

  public ngOnDestroy(): void {}

}
