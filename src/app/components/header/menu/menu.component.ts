import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from '../../../services/auth/auth.service';

import { NewChatComponent } from '../../modals/new-chat/new-chat.component';
import { ChatInformationComponent } from '../../modals/chat-information/chat-information.component';
import { UserContactsComponent } from '../../modals/user-contacts/user-contacts.component';

import { CHAT_TYPES } from '../../../actions/main.action';
import { ChatInformationModel } from '../../modals/chat-information/chat-information.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.template.html',
  styleUrls: ['./menu.style.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {}

  public openModal(type: string): void {
    if (type === 'Settings') {
      this.dialog.open(ChatInformationComponent, {
        width: '450px',
        data: new ChatInformationModel(CHAT_TYPES.profile, true, this.authService.getUserId())
      });
    } else if (type === 'Contacts') {
      this.dialog.open(UserContactsComponent, {
        width: '450px',
      });
    } else {
      this.dialog.open(NewChatComponent, {
        width: '450px',
        data: { type }
      });
    }
  }

}
