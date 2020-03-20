import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ChatInformationComponent } from '../modals/chat-information/chat-information.component';

import { ChatService } from '../../services/chat/chat.service';

import { CHAT_TYPES } from '../../actions/main.action';
import { ChatInformationModel } from '../modals/chat-information/chat-information.model';

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
    this.dialog.open(ChatInformationComponent, {
      width: '450px',
      data: new ChatInformationModel(CHAT_TYPES.chat, true)
    });
  }

}
