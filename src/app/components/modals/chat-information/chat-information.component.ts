import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RequestsService } from '../../../services/requests/requests.service';

import { ChatInformationModel } from './chat-information.model';
import { CHAT_TYPES } from '../../../actions/main.action';

@Component({
  selector: 'app-chat-information',
  templateUrl: './chat-information.component.html',
  styleUrls: ['./chat-information.component.scss']
})
export class ChatInformationComponent implements OnInit {

  public chatTypes = CHAT_TYPES;

  constructor(
    private api: RequestsService,
    public dialogRef: MatDialogRef<ChatInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChatInformationModel
  ) {}

  public ngOnInit(): void {
    // TODO: Get data by chatId
    // this.api.get({url: `/${this.data.chatId}`})
  }

  public closeModel(): void {
    this.dialogRef.close();
  }

}
