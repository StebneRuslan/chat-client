import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { RequestsService } from '../../services/requests/requests.service';

import { AuthService } from '../../services/auth/auth.service';
import { ChatService } from '../../services/chat/chat.service';

import { ProfileComponent } from '../modals/profile/profile.component';
import { ModalMainComponent } from '../modals/modal-main/modal-main.component';

import { ChatUsersMock } from './char-users.mock';

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
    const user = this.authService.getUserId() === id;
    this.dialog.open(ProfileComponent, {
      width: '450px',
      data: {
        title: 'Contact info',
        type: user ? 'profile' : 'contact',
        photoChange: user
      }
    });
  }

  public openContacts() {
    this.dialog.open(ModalMainComponent, {
      width: '450px',
      data: {
        activeModal: 'Contacts'
      }
    });
  }

  public removeUser(id, deleteChat) {
    // this.api.delete({url: ''})
  }

}
