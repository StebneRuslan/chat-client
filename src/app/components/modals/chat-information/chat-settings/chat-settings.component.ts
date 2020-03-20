import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';

import { RequestsService } from '../../../../services/requests/requests.service';

import { AuthService } from '../../../../services/auth/auth.service';
import { ChatService } from '../../../../services/chat/chat.service';

import { ChatInformationComponent } from '../chat-information.component';
import { NewChatComponent } from '../../new-chat/new-chat.component';

import { ChatUsersMock } from './chat-users.mock';
import { CHAT_TYPES } from '../../../../actions/main.action';
import { ChatInformationModel } from '../chat-information.model';

@Component({
  selector: 'app-chat-settings',
  templateUrl: './chat-settings.template.html',
  styleUrls: ['./chat-settings.style.scss']
})
export class ChatSettingsComponent implements OnInit {

  @Input() editChat: boolean;

  public chatUsers = ChatUsersMock;

  constructor(
    private api: RequestsService,
    private authService: AuthService,
    public chatService: ChatService,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {}

  public openProfile(id): void {
    const ifProfile = this.authService.getUserId() === id;
    this.dialog.open(ChatInformationComponent, {
      width: '450px',
      data: new ChatInformationModel(ifProfile ? CHAT_TYPES.profile : CHAT_TYPES.contact, ifProfile, id)
    });
  }

  public openContacts() {
    this.dialog.open(NewChatComponent, {
      width: '450px',
      data: {
        type: 'Contacts'
      }
    });
  }

  public removeUser(id, deleteChat) {
    // this.api.delete({url: ''})
  }

}
