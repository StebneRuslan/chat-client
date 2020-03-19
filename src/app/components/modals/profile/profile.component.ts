import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ProfileModel } from './profile.model';
import { CHAT_TYPES } from '../../../actions/main.action';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.style.scss']
})
export class ProfileComponent implements OnInit {

  public chatTypes = CHAT_TYPES;

  constructor(
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProfileModel
  ) {}

  public ngOnInit(): void {}

  public closeModel(): void {
    this.dialogRef.close();
  }
}
