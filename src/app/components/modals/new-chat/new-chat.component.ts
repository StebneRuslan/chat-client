import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { NewContactComponent } from '../new-contact/new-contact.component';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.template.html',
  styleUrls: ['./new-chat.style.scss']
})
export class NewChatComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<NewChatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit(): void {}

  public closeModel(): void {
    this.dialogRef.close();
  }

  public openAddContactWindow(): void {
    this.dialog.open(NewContactComponent, {
      width: '400px'
    });
  }
}
