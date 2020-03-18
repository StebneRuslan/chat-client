import { MatDialogRef } from '@angular/material/dialog';
import { ModalMainComponent } from '../modal-main/modal-main.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.template.html',
  styleUrls: ['./new-chat.style.scss']
})
export class NewChatComponent implements OnInit {
  @Input() title: string;
  constructor(public dialogRef: MatDialogRef<ModalMainComponent>) { }

  public ngOnInit(): void {}

  public closeModel(): void {
    this.dialogRef.close();
  }
}
