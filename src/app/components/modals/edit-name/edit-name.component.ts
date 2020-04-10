import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BusService } from '../../../services/bus/bus.service';

import { EDIT_INFO_ERROR } from '../../../actions/main.action';
import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.template.html',
  styleUrls: ['./edit-name.style.scss']
})
export class EditNameComponent implements OnInit, OnDestroy {

  public chatTypes = ChatTypes;
  public updateError = '';

  constructor(
    private bus: BusService,
    public dialogRef: MatDialogRef<EditNameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit(): void {
    this.bus.subscribe(EDIT_INFO_ERROR, this.setError, this);
  }

  public setError(err): void {
    this.updateError = err.error.message;
  }

  public create(): void {
    this.data.callback(this.data.name, this.data.description, this.dialogRef);
  }

  public close(): void {
    this.dialogRef.close();
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(EDIT_INFO_ERROR, this.setError);
  }

}
