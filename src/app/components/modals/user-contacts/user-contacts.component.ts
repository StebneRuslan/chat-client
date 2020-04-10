import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { RequestsService } from '../../../services/requests/requests.service';
import { BusService } from '../../../services/bus/bus.service';

import { NewContactComponent } from './new-contact/new-contact.component';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { OPEN_CHAT } from '../../../actions/main.action';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.template.html',
  styleUrls: ['./user-contacts.style.scss']
})
export class UserContactsComponent implements OnInit, OnDestroy {

  public users;
  public usersFilter;
  public contactsRequest$ = null;

  constructor(
    private bus: BusService,
    private api: RequestsService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UserContactsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit(): void {
    this.contactsRequest$ = this.api.get({url: '/contacts'})
      .subscribe(res => {
        this.users = [...res];
        this.usersFilter = [...res];
      });
  }

  public selectUser(id: string): void {
    this.bus.publish(OPEN_CHAT, {chatId: id, isDialog: true});
    this.dialogRef.close();
  }

  public openAddContactWindow(): void {
    const dialogRef = this.dialog.open(NewContactComponent, {
      width: '400px'
    });
    dialogRef.afterClosed()
      .subscribe(
        res => {
        if (res) {
          this.users.unshift(res);
          this.usersFilter = [...this.users];
        }
      });
  }

  public closeModel(): void {
    this.dialogRef.close();
  }

  public ngOnDestroy(): void {
    if (this.contactsRequest$) {
      this.contactsRequest$.unsubscribe();
    }
  }

}
