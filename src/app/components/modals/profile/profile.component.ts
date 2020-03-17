import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalMainComponent } from '../modal-main/modal-main.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.style.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalMainComponent>) {}

  public ngOnInit(): void {}

  public closeModel(): void {
    this.dialogRef.close();
  }
}
