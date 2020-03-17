import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.template.html',
  styleUrls: ['./edit-name.style.scss']
})
export class EditNameComponent implements OnInit {
  // todo create model for data
  constructor(
    public dialogRef: MatDialogRef<EditNameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit(): void {}

}
