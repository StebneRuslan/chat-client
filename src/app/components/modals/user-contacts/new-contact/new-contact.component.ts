import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RequestsService } from '../../../../services/requests/requests.service';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.template.html',
  styleUrls: ['./new-contact.style.scss']
})
export class NewContactComponent implements OnInit, OnDestroy {

  public username: string;
  public addContactError: string;
  public contactsRequest$ = null;

  constructor(
    private api: RequestsService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<NewContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit() {}

  public addContact() {
    this.contactsRequest$ = this.api.post({url: `/contacts/${this.username}`, body: {}})
      .subscribe(
        res => this.close(res),
        err => this.addContactError = err.error.message
      );
  }

  public close(data?) {
    this.dialogRef.close(data);
  }

  public ngOnDestroy(): void {
    if (this.contactsRequest$) {
      this.contactsRequest$.unsubscribe();
    }
  }

}
