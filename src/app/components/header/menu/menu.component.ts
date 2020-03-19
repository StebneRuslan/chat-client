import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NewChatComponent } from '../../modals/new-chat/new-chat.component';
import { ProfileComponent } from '../../modals/profile/profile.component';

import { CHAT_TYPES } from '../../../actions/main.action';
import { ProfileModel } from '../../modals/profile/profile.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.template.html',
  styleUrls: ['./menu.style.scss']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {}

  public openModal(type: string): void {
    if (type === 'Settings') {
      this.dialog.open(ProfileComponent, {
        width: '450px',
        data: new ProfileModel(CHAT_TYPES.profile, true)
      });
    } else {
      this.dialog.open(NewChatComponent, {
        width: '450px',
        data: { type }
      });
    }
  }

}
