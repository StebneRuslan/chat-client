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

  // todo create model for data
  constructor(
    private api: RequestsService,
    private bus: BusService,
    public dialogRef: MatDialogRef<EditNameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit(): void {}

  public create(): void {
    this.data.callback(this.data.oldName, this.data.oldDescription, this.dialogRef);
  }

  public close() {
    this.dialogRef.close();
  }

}
