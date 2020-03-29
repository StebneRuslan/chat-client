import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EditNameComponent } from '../edit-name/edit-name.component';

// configs
import { UserModel } from '../../../models/user.model';
import { UsersListMock } from '../../../models/mock/users-list.mock';
import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';
import { CREATE_NEW_CHAT, CREATE_NEW_DIALOG, ADD_MEMBERS } from '../../../actions/main.action';

// services
import { RequestsService } from '../../../services/requests/requests.service';
import { ChatService } from '../../../services/chat/chat.service';
import { BusService } from '../../../services/bus/bus.service';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.template.html',
  styleUrls: ['./new-chat.style.scss']
})
export class NewChatComponent implements OnInit, OnDestroy {

  public users: UserModel[] = [];
  public usersFilter: UserModel[] = [];
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
        res.forEach(contact => contact.blurred = !this.data.contacts.includes(contact._id));
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
        name: '',
        description: '',
        type: this.data.type === 'New channel' ? ChatTypes.CHANNEL : ChatTypes.GROUP,
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
          console.log('error', err);
        });
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(CREATE_NEW_CHAT, this.openCreateChatWindow);
    this.bus.unsubscribe(ADD_MEMBERS, this.addMembers);
  }
}
