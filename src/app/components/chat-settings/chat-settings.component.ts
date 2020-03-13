import { Component, OnInit } from '@angular/core';

import { RequestsService } from '../../services/requests/requests.service';
import { ProfileComponent } from '../modals/profile/profile.component';

import { ChatUsersMock } from './char-users.mock';
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-chat-settings',
  templateUrl: './chat-settings.component.html',
  styleUrls: ['./chat-settings.component.scss']
})
export class ChatSettingsComponent implements OnInit {

  public chatUsers = ChatUsersMock;
  public userData = {
    role: 'admin',
    id: 1
  };

  constructor(
    private api: RequestsService,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {}

  public openProfile(id): void {
    this.dialog.open(ProfileComponent, {
      width: '450px'
    });
  }

  public removeUser(id, deleteChat) {
    // this.api.delete({url: ''})
  }

}
