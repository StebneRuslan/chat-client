import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageModalModel } from './message-modal.model';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.template.html',
  styleUrls: ['./message-modal.style.scss']
})
export class MessageModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageModalModel
  ) { }

  public ngOnInit(): void {}

  public close(status: boolean): void {
    this.dialogRef.close(status);
  }
}
