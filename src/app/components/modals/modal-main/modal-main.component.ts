import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-main',
  templateUrl: './modal-main.template.html',
  styleUrls: ['./modal-main.style.scss']
})
export class ModalMainComponent implements OnInit {
  public activeModal: string;
  constructor(
    public dialogRef: MatDialogRef<ModalMainComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.activeModal = this.data.activeModal;
  }

  public ngOnInit(): void {}

}
