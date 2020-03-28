import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UserModel } from '../../users-list/user/user.model';
import { UsersListModel } from '../../users-list/users-list.model';
import { BusService } from '../../../services/bus/bus.service';
import { CREATE_NEW_CHAT, CHAT_TYPES, CREATE_NEW_DIALOG, ADD_MEMBERS } from '../../../actions/main.action';
import { RequestsService } from '../../../services/requests/requests.service';
import { EditNameComponent } from '../edit-name/edit-name.component';
import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';
import {error} from 'util';
import {ChatService} from '../../../services/chat/chat.service';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.template.html',
  styleUrls: ['./new-chat.style.scss']
})
export class NewChatComponent implements OnInit, OnDestroy {
  public chatTypes = CHAT_TYPES;
  public users: UserModel[] = new UsersListModel().users;
  public usersFilter: UserModel[] = this.users;
  public modalType = '';
  constructor(
    private dialog: MatDialog,
    private api: RequestsService,
    private bus: BusService,
    private chatService: ChatService,
    public dialogRef: MatDialogRef<NewChatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createChat = this.createChat.bind(this);
  }

  public ngOnInit(): void {
    this.bus.subscribe(CREATE_NEW_CHAT, this.openCreateChatWindow, this);
    this.bus.subscribe(ADD_MEMBERS, this.addMembers, this);
    this.modalType = this.data.type;
    this.api.get({url: '/contacts'})
      .subscribe(res => {
        this.users = [...res];
        this.usersFilter = [...res];
      });
  }

  public closeModel(): void {
    this.dialogRef.close();
  }

  public selectUser(userId: string): void {
    const selectedUser = this.users.find(user => user._id === userId);
    selectedUser.selected = !selectedUser.selected;
  }

  public openCreateChatWindow(): void {
    this.dialog.open(EditNameComponent, {
      width: '450px',
      data: {
        action: 'create',
        oldName: '',
        oldDescription: '',
        type: this.data.type === 'New channel' ? this.chatTypes.channel : this.chatTypes.chat,
        callback: this.createChat
      }
    });
  }

  public addMembers(): void {
    this.chatService.addMembers(this.users.filter(user => user.selected).map(user => user._id))
      .subscribe(data => {
        console.log('data', data);
      }, err => {
        console.log('error', err);
      });
  }

  public createChat(title: string, description: string, dialog: any): void {
    this.chatService.createChat(
      title,
      this.data.type === 'New channel' ? ChatTypes.CHANNEL : ChatTypes.GROUP,
      description,
      this.users.filter(user => user.selected).map(user => user._id))
      .subscribe(
        data => {
          this.dialogRef.close();
          dialog.close();
          this.bus.publish(CREATE_NEW_DIALOG, data.chat);
        },
          err => {
          console.log('#####', err);
        });
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(CREATE_NEW_CHAT, this.openCreateChatWindow);
    this.bus.unsubscribe(ADD_MEMBERS, this.addMembers);
  }
}
