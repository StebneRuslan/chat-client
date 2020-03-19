import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ProfileComponent } from '../modals/profile/profile.component';

import { ChatService } from '../../services/chat/chat.service';

import { CHAT_TYPES } from '../../actions/main.action';
import { ProfileModel } from '../modals/profile/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
  styleUrls: ['./header.style.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private chatService: ChatService
  ) { }

  public ngOnInit() {
  }

  public openChatSetting(): void {
    this.dialog.open(ProfileComponent, {
      width: '450px',
      data: new ProfileModel(CHAT_TYPES.chat, true)
    });
  }

}
