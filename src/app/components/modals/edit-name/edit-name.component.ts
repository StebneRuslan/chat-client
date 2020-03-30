import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.template.html',
  styleUrls: ['./edit-name.style.scss']
})
export class EditNameComponent implements OnInit {

  public chatTypes = ChatTypes;
  public updateError = '';

  // todo create model for data
  constructor(
    public dialogRef: MatDialogRef<EditNameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit(): void {}

  public create(): void {
    this.data.callback(this.data.name, this.data.description, this.dialogRef);
  }

  public close() {
    this.dialogRef.close();
  }

}
