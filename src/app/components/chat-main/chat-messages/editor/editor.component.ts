import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AuthService } from '../../../../services/auth/auth.service';
import { ChatService } from '../../../../services/chat/chat.service';
import { SocketsService } from '../../../../services/sockets/sockets.service';

import { ChatTypes } from '../../../../services/interfaces/chat-types.interfaces';

import { ChatInformationComponent } from '../../../modals/chat-information/chat-information.component';
import { ChatInformationModel } from '../../../../models/chat-information.model';
import { SocketMessageModel } from '../../../../models/socket.message.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.template.html',
  styleUrls: ['./editor.style.scss']
})
export class EditorComponent implements OnInit, OnDestroy {
  public message: string;
  public usersTyping = [];
  public typingTimeout = null;
  public startTyping = false;

  constructor(
    private authService: AuthService,
    private chatService: ChatService,
    public dialog: MatDialog,
    public socketsService: SocketsService
  ) {}

  public ngOnInit() {
    this.socketsService.onMessage('notifyTyping').subscribe(user => {
      if (!this.usersTyping.includes(user)) {
        this.usersTyping.push(user);
      }
    });
    this.socketsService.onMessage('notifyTyping').subscribe(username => {
      this.stopTyping(username);
    });
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
      this.socketsService.send(new SocketMessageModel('typing', this.authService.userData.username));
      this.startTyping = true;
    }
    this.typingTimeout = setTimeout(() => {
      this.socketsService.send(new SocketMessageModel('stopTyping', this.authService.userData.username));
      this.startTyping = false;
    }, 3000);
  }

  public sendMessage(event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.message.trim()) {
      this.socketsService.send(new SocketMessageModel('message', {
        authorId: this.authService.userData.id,
        chatId: this.chatService.activeChat._id,
        message: this.message
      }));
      this.message = '';
    }
  }

  public ngOnDestroy(): void {
    // this.socket.off('notifyTyping');
    // this.socket.off('notifyStopTyping');
    clearTimeout(this.typingTimeout);
  }

}
