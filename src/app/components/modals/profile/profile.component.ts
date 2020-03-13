import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.style.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  public ngOnInit(): void {}

  public closeModel(): void {
    this.dialogRef.close();
  }
}
