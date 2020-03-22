import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RequestsService } from '../../../services/requests/requests.service';
import { BusService } from '../../../services/bus/bus.service';
import { ChatService } from '../../../services/chat/chat.service';

import { CHAT_TYPES, UPDATE_CHAT_INFO } from '../../../actions/main.action';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.template.html',
  styleUrls: ['./edit-name.style.scss']
})
export class EditNameComponent implements OnInit {

  public chatTypes = CHAT_TYPES;
  public updateError = '';
  public chatData;

  // todo create model for data
  constructor(
    private api: RequestsService,
    private bus: BusService,
    private chatService: ChatService,
    public dialogRef: MatDialogRef<EditNameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit(): void {
    this.chatData = this.chatService.getSelectedChat();
  }

  public save() {
    const url = this.chatData.type === this.chatTypes.profile ? `/users/${this.data.chatId}` : `/chats/${this.data.chatId}`;
    // TODO: do request for other chat data
    if (this.chatData.type === this.chatTypes.profile) {
      this.api.put({url, body: { username: this.data.oldName}})
        .subscribe(
          () => {
            this.bus.publish(UPDATE_CHAT_INFO, {name: this.data.oldName});
            this.close();
          },
          err => this.updateError = err.error.message
        );
    }
  }

  public close() {
    this.dialogRef.close();
  }

}
