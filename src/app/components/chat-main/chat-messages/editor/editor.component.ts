import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as io from 'socket.io-client';

import { AuthService } from '../../../../services/auth/auth.service';
import { ChatService } from '../../../../services/chat/chat.service';

import { environment } from '../../../../../environments/environment';
import { ChatTypes } from '../../../../services/interfaces/chat-types.interfaces';

import { ChatInformationComponent } from '../../../modals/chat-information/chat-information.component';
import { ChatInformationModel } from '../../../../models/chat-information.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.template.html',
  styleUrls: ['./editor.style.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  private socket;
  public message: string;
  public usersTyping = [];
  public typingTimeout = null;
  public startTyping = false;

  constructor(
    private authService: AuthService,
    private chatService: ChatService,
    public dialog: MatDialog,
  ) {
    this.socket = io(environment.api);
  }

  public ngOnInit() {
    this.socket.on('notifyTyping', user => {
      if (!this.usersTyping.includes(user)) {
        this.usersTyping.push(user);
      }
    });

    this.socket.on('notifyStopTyping', username => this.stopTyping(username));
  }

  public stopTyping(username: string): void {
    const index = this.usersTyping.indexOf(username);
    if (index > -1) {
      this.usersTyping.splice(index, 1);
    }
  }

  public openModal(type: string): void {
    this.dialog.open(ChatInformationComponent, {
      width: '450px',
      data: new ChatInformationModel(
        type === 'profile' ? ChatTypes.PROFILE : this.chatService.activeChat.chatType,
        type === 'profile' || this.chatService.activeChat.admins.includes(this.authService.userData.id),
        type === 'profile' ? this.chatService.activeChat.chatType === ChatTypes.DIALOG
          ? this.chatService.activeChat.recipientId : this.authService.userData.id
          : this.chatService.activeChat.chatType === ChatTypes.DIALOG
          ? this.chatService.activeChat.recipientId
          : this.chatService.activeChat._id
      )
    });
  }

  public typingMessage(): void {
    clearTimeout(this.typingTimeout);
    if (!this.startTyping) {
      this.socket.emit('typing', this.authService.userData.username);
      this.startTyping = true;
    }
    this.typingTimeout = setTimeout(() => {
      this.socket.emit('stopTyping', this.authService.userData.username);
      this.startTyping = false;
    }, 3000);
  }

  public sendMessage(event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.message.trim()) {
      this.socket.emit('message', {
        authorId: this.authService.userData.id,
        chatId: this.chatService.activeChat._id,
        message: this.message
      });
      this.message = '';
    }
  }

  public ngOnDestroy(): void {
    clearTimeout(this.typingTimeout);
  }

}
