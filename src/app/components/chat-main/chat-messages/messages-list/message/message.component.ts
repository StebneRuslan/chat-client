import { Component, OnInit, Input } from '@angular/core';
import { MessageModel } from './message.model';
import { ChatInformationComponent } from '../../../../modals/chat-information/chat-information.component';
import { ChatInformationModel } from '../../../../modals/chat-information/chat-information.model';
import { CHAT_TYPES } from '../../../../../actions/main.action';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.template.html',
  styleUrls: ['./message.style.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: MessageModel;
  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {}

  public changeSelectStatus(status: boolean): void {
    this.message.hover = status;
  }

  public openProfile(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.dialog.open(ChatInformationComponent, {
      width: '450px',
      data: new ChatInformationModel(CHAT_TYPES.contact, true)
    });
  }
}
