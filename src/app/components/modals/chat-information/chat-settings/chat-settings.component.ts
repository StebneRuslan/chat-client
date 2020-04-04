import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { RequestsService } from '../../../../services/requests/requests.service';

import { AuthService } from '../../../../services/auth/auth.service';
import { ChatService } from '../../../../services/chat/chat.service';

import { ChatInformationComponent } from '../chat-information.component';
import { NewChatComponent } from '../../new-chat/new-chat.component';

import { ChatTypes } from '../../../../services/interfaces/chat-types.interfaces';
import { ChatInformationModel } from '../../../../models/chat-information.model';
import { SocketsService } from '../../../../services/sockets/sockets.service';
import { SocketMessageModel } from '../../../../models/socket.message.model';

@Component({
  selector: 'app-chat-settings',
  templateUrl: './chat-settings.template.html',
  styleUrls: ['./chat-settings.style.scss']
})
export class ChatSettingsComponent implements OnInit {

  public userId;

  @Input() editChat: boolean;
  @Input() chatUsers: any;

  constructor(
    private api: RequestsService,
    private authService: AuthService,
    public chatService: ChatService,
    public socketsService: SocketsService,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.userId = this.authService.userData.id;
  }

  public openProfile(id): void {
    const ifProfile = this.userId === id;
    this.dialog.open(ChatInformationComponent, {
      width: '450px',
      data: new ChatInformationModel(ifProfile ? ChatTypes.PROFILE : ChatTypes.DIALOG, ifProfile, id)
    });
  }

  public openContacts() {
    this.dialog.open(NewChatComponent, {
      width: '450px',
      data: {
        type: 'Contacts',
        contacts: this.chatUsers
      }
    });
  }

  public removeUser(userId) {
    this.socketsService.send(new SocketMessageModel('remove-members', {
      chatId: this.chatService.activeChat._id,
      userId
    }));
  }

}
