import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { RequestsService } from '../../../services/requests/requests.service';
import { BusService } from '../../../services/bus/bus.service';
import { ChatService } from '../../../services/chat/chat.service';

import { NewContactComponent } from './new-contact/new-contact.component';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { OPEN_CHAT, ADD_NEW_CHAT } from '../../../actions/main.action';
import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';

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
    private chatService: ChatService,
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
    this.chatService.createChat('', ChatTypes.DIALOG, '', [id])
      .subscribe(
        res => {
          if (res.message !== 'Chat already exist!') {
            this.bus.publish(ADD_NEW_CHAT, res.chat);
          } else {
            this.bus.publish(OPEN_CHAT, {chatId: res.chat.recipientId, isDialog: true});
          }
          this.dialogRef.close();
        },
        err => console.log('error', err)
      );
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
