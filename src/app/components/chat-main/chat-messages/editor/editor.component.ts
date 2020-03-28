import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as io from 'socket.io-client';

import { AuthService } from '../../../../services/auth/auth.service';
import { ChatService } from '../../../../services/chat/chat.service';

import { environment } from '../../../../../environments/environment';
import { CHAT_TYPES } from '../../../../actions/main.action';

import { ChatInformationComponent } from '../../../modals/chat-information/chat-information.component';
import { ChatInformationModel } from '../../../modals/chat-information/chat-information.model';

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

    this.socket.on('notifyStopTyping', user =>  {
      const index = this.usersTyping.indexOf(user);
      if (index > -1) {
        this.usersTyping.splice(index, 1);
      }
    });
  }

  public openModal(type) {
    const activeChat = this.chatService.getActiveChat();
    this.dialog.open(ChatInformationComponent, {
      width: '450px',
      data: new ChatInformationModel(
        type === 'profile' ? CHAT_TYPES.profile : activeChat.chatType,
        type === 'profile' || activeChat.role === 'admin',
        type === 'profile' ? this.authService.getUserId() : activeChat._id
      )
    });
  }

  public typingMessage() {
    clearTimeout(this.typingTimeout);
    if (!this.startTyping) {
      this.socket.emit('typing', this.authService.username);
      this.startTyping = true;
    }
    this.typingTimeout = setTimeout(() => {
      this.socket.emit('stopTyping', this.authService.username);
      this.startTyping = false;
    }, 3000);
  }

  public sendMessage(event?) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.socket.emit('message', {
      authorId: this.authService.getUserId(),
      chatId: this.chatService.getActiveChat()._id,
      message: this.message
    });
    this.message = '';
  }

  public ngOnDestroy(): void {
    clearTimeout(this.typingTimeout);
  }

}
