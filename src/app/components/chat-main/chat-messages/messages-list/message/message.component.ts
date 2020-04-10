import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from '../../../../../services/auth/auth.service';

import { ChatInformationComponent } from '../../../../modals/chat-information/chat-information.component';

import { MessageModel } from '../../../../../models/message.model';
import { ChatInformationModel } from '../../../../../models/chat-information.model';
import { ChatTypes } from '../../../../../services/interfaces/chat-types.interfaces';
import { MessageTypes } from '../../../../../services/interfaces/message-types.interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.template.html',
  styleUrls: ['./message.style.scss']
})
export class MessageComponent implements OnInit {

  public REPORT: string = MessageTypes.REPORT;

  @Input() message: MessageModel;

  constructor(
    public dialog: MatDialog,
    public authService: AuthService
  ) { }

  public ngOnInit(): void {}

  public openProfile(event: any): void {
    event.preventDefault();
    event.stopPropagation();

    const data = this.authService.userData.id === this.message.user._id ?
      new ChatInformationModel(ChatTypes.PROFILE, true, this.authService.userData.id) :
      new ChatInformationModel(ChatTypes.DIALOG, false, this.message.user._id);

    this.dialog.open(ChatInformationComponent, {
      width: '450px',
      data
    });
  }
}
