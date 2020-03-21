import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.template.html',
  styleUrls: ['./new-contact.style.scss']
})
export class NewContactComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
