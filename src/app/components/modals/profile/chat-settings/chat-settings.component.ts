import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { RequestsService } from '../../../../services/requests/requests.service';

import { AuthService } from '../../../../services/auth/auth.service';
import { ChatService } from '../../../../services/chat/chat.service';

import { ProfileComponent } from '../profile.component';
import { NewChatComponent } from '../../new-chat/new-chat.component';

import { ChatUsersMock } from './char-users.mock';
import { CHAT_TYPES } from '../../../../actions/main.action';
import { ProfileModel } from '../profile.model';

@Component({
  selector: 'app-chat-settings',
  templateUrl: './chat-settings.component.html',
  styleUrls: ['./chat-settings.component.scss']
})
export class ChatSettingsComponent implements OnInit {

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
    this.dialog.open(ProfileComponent, {
      width: '450px',
      data: new ProfileModel(ifProfile ? CHAT_TYPES.profile : CHAT_TYPES.contact, ifProfile, id)
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
