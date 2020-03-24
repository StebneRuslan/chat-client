import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.template.html',
  styleUrls: ['./new-chat.style.scss']
})
export class NewChatComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewChatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit(): void {}

  public closeModel(): void {
    this.dialogRef.close();
  }

}
